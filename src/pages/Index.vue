<template>
  <q-page class="q-pa-lg q-pl-lg">
    <div class="q-pa-md">

      <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
        <div class="col-12 col-md-12 col-md-auto">
          <q-card class="my-card">
            <q-card-section>
              <div class="text-h5">Weather Info</div>
            </q-card-section>

            <q-separator />

            <q-card-section>
              <q-select
                option-value="id"
                option-label="name"
                label="Select City"
                v-model="selectedCity"
                :options="optionsCities"
                @update:model-value="onChangeCity"
              />
            </q-card-section>

            <q-card-section v-if="selectedCity && weatherInfo">
              <div v-for="(item, i) in weatherInfo.weather" :key="i">
                <div class="text-h6">
                  {{ item.main }}
                </div>
                <div>
                  {{ item.description }}
                </div>
              </div>

              <p></p>

              <div class="text-h6">
                {{ weatherInfo.main.temp }} °C
              </div>
              <div>
                Wind {{ weatherInfo.wind.speed }} m/sec
              </div>

            </q-card-section>

            <q-card-actions v-if="selectedCity && weatherInfo">
              <q-btn
                class="q-ma-sm"
                unelevated
                rounded
                color="primary"
                @click="fetchForecast"
              > {{ isForeCast ? "Close" : "See Forecast" }}</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>

      <div class="row q-col-gutter-x-xs q-col-gutter-y-lg q-pt-md" v-if="isForeCast">
        <div class="col-12 col-md-6 mt-2 col-md-auto q-pr-sm">
          <q-card>
            <q-table
              title="Forecast Weather"
              :rows="fetchWeatherForecastByDate"
              :columns="forecastWeatherInfoColumns"
              row-key="date"
              :pagination="pagination"
              :rows-per-page-options="[8, 15]"
            >
              <template v-slot:body="props">
                <q-tr :props="props">
                  <q-td key="date" :props="props">
                    {{ props.row.hour }}
                  </q-td>
                  <q-td key="temp" :props="props">
                    {{ props.row.main.temp }} <span>&#8451;</span>
                  </q-td>
                  <q-td key="minTemp" :props="props">
                    {{ props.row.main.temp_min }} <span>&#8451;</span>
                  </q-td>
                  <q-td key="maxTemp" :props="props">
                    {{ props.row.main.temp_max }} <span>&#8451;</span>
                  </q-td>
                  <q-td key="wind" :props="props">
                    {{ props.row.wind.speed }}
                  </q-td>
                </q-tr>
              </template>
            </q-table>

            <q-separator />

            <div class="q-pa-md">
              <q-btn-group spread>
                <q-btn
                  unelevated
                  rounded
                  color="primary"
                  :label="item.date"
                  v-for="(item, idx) in forecastOverview"
                  :key="idx"
                  @click="selectedDate = item.date"
                />
              </q-btn-group>
            </div>
          </q-card>
        </div>

        <div class="col-12 col-md-6 mt-2 col-md-auto">
          <q-table
            title="Forecast Weather Overview"
            :rows="forecastOverview"
            :columns="forecastWeatherOverviewColumns"
            row-key="date"
            :pagination="pagination"
            :rows-per-page-options="[8, 15]"
          />
        </div>
      </div>

    </div>
  </q-page>
</template>

<script>
import { optionsCities, forecastWeatherInfoColumns, forecastWeatherOverviewColumns } from "./config";
import { FETCH_WEATHER_INFO_BY_CITY_ID, FETCH_FORECAST_INFO_BY_CITY_ID } from '../services/index'
import { ref, computed } from 'vue';
import { useQuasar } from 'quasar'
import moment from 'moment';

export default {
  name: "WeatherInfoApp",
  setup() {
    const $q = useQuasar()

    const pagination = ref({ rowsPerPage:8 });
    const selectedCity = ref(null);
    const selectedDate = ref(null);

    const isForeCast = ref(false);

    const weatherInfo = ref(null);
    const forecastInfo = ref(null);
    const forecastOverview = ref([]);

    const fetchWeatherByCityChange = async () => {
      try {
        $q.loading.show({ message: 'fetch weather info process is in progress. Hang on...'});
        const result = await FETCH_WEATHER_INFO_BY_CITY_ID(selectedCity.value.id);
        weatherInfo.value = result;
      } catch (error) {
        console.log("got the error : {}", error);
        $q.notify({ color: 'negative', message: 'Something went wrong. Try again', position: 'bottom-right'})
      } finally {
        $q.loading.hide();
      }
      isForeCast.value = false;
    }

    const fetchForecast = async () => {
      try {
        if(!isForeCast.value) {
          $q.loading.show({ message: 'forecast process is in progress. Hang on...'});
          const result = await FETCH_FORECAST_INFO_BY_CITY_ID(selectedCity.value.id)

          await Promise.all(result.list.map(e => {
            const dt = e.dt_txt.split(" ");
            e.date = dt[0];
            e.hour = moment(dt[1], "hh").format('LT');
            return e;
          }))

          forecastInfo.value = result;
          await forecastLogic(result)
        }
      } catch (error) {
        console.log("got the error on fetch forecast: {}", error);
        $q.loading.hide();
        $q.notify({ color: 'negative', message: 'Something went wrong. Try again', position: 'bottom-right'})
      } finally {
        $q.loading.hide();
      }

      if(forecastInfo.value && forecastInfo.value.list.length > 0)
        selectedDate.value = forecastInfo.value.list[0].date;

      isForeCast.value = !isForeCast.value
    }

    // find to overview of day by day
    const forecastLogic = async  (data) => {
      forecastOverview.value = Object.values(await data.list.reduce((acc, day) => {
        const { date } = day;
        console.log(date)
        if (acc[date]) {
          acc[date].tempMax = Math.max(acc[date].tempMax, day.main.temp_max);
          acc[date].tempMin = Math.min(acc[date].tempMin, day.main.temp_min);
        } else {
          acc[date] = { tempMax: day.main.temp_max, tempMin: day.main.temp_min };
        }
        acc[date].date = date;
        console.log(acc)
        return acc;
      }, {}));
    };

    const onChangeCity = async () => {
      isForeCast.value = false;
      weatherInfo.value = null;
      forecastInfo.value = null;
      forecastOverview.value = [];
      await fetchWeatherByCityChange();
    }

    const fetchWeatherForecastByDate = computed(() => {
      return forecastInfo.value.list.filter(e => e.dt_txt.split(" ")[0] === selectedDate.value)
    })

    return {
      pagination,
      isForeCast,
      selectedCity,
      selectedDate,
      weatherInfo,
      forecastInfo,
      forecastOverview,
      fetchWeatherForecastByDate,
      optionsCities,
      forecastWeatherInfoColumns,
      forecastWeatherOverviewColumns,
      forecastLogic,
      fetchForecast,
      onChangeCity,
      fetchWeatherByCityChange,
    };
  },
};
</script>
