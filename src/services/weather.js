import { serviceMaker, methods } from './service'

export const FETCH_ALL_CITIES = () =>
	serviceMaker(`/auth/user/whoAmI`, methods.GET)

export const FETCH_WEATHER_INFO_BY_CITY_ID = (cityId) =>
	serviceMaker(`/weather?id=${cityId}&appid=538882fc8387290c6cee83f313a6acf5&units=metric`, methods.GET)

export const FETCH_FORECAST_INFO_BY_CITY_ID = (cityId) =>
	serviceMaker(`/forecast?id=${cityId}&appid=538882fc8387290c6cee83f313a6acf5&units=metric`, methods.GET)
