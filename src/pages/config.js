export const optionsCities = [
  {
    id: 6167865,
    name: "Toronto",
    country: "CA",
  },
  {
    id: 6094817,
    name: "Ottawa",
    country: "CA",
  },
  {
    id: 1850147,
    name: "Tokyo",
    country: "JP",
  },
];

export const weatherDummyRes = {
  "coord": {
    "lon": -75.6981,
    "lat": 45.4112
  },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 24.15,
    "feels_like": 24.53,
    "temp_min": 22.77,
    "temp_max": 25.24,
    "pressure": 1018,
    "humidity": 73
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.34,
    "deg": 141,
    "gust": 3.13
  },
  "clouds": {
    "all": 33
  },
  "dt": 1631919510,
  "sys": {
    "type": 2,
    "id": 2005537,
    "country": "CA",
    "sunrise": 1631875442,
    "sunset": 1631920233
  },
  "timezone": -14400,
  "id": 6094817,
  "name": "Ottawa",
  "cod": 200
}


export const forecastDummyRes = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1631912400,
      "main": {
        "temp": 26.2,
        "feels_like": 26.2,
        "temp_min": 25.31,
        "temp_max": 26.2,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 998,
        "humidity": 68,
        "temp_kf": 0.89
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 28
      },
      "wind": {
        "speed": 3.78,
        "deg": 141,
        "gust": 5.43
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-17 21:00:00"
    },
    {
      "dt": 1631923200,
      "main": {
        "temp": 24.82,
        "feels_like": 25.24,
        "temp_min": 22.05,
        "temp_max": 24.82,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 998,
        "humidity": 72,
        "temp_kf": 2.77
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 23
      },
      "wind": {
        "speed": 2.23,
        "deg": 144,
        "gust": 5.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-18 00:00:00"
    },
    {
      "dt": 1631934000,
      "main": {
        "temp": 22.79,
        "feels_like": 23.06,
        "temp_min": 21.09,
        "temp_max": 22.79,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 998,
        "humidity": 74,
        "temp_kf": 1.7
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 2.23,
        "deg": 251,
        "gust": 4.18
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-18 03:00:00"
    },
    {
      "dt": 1631944800,
      "main": {
        "temp": 20.1,
        "feels_like": 20.2,
        "temp_min": 20.1,
        "temp_max": 20.1,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 998,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 2.91,
        "deg": 290,
        "gust": 9.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-18 06:00:00"
    },
    {
      "dt": 1631955600,
      "main": {
        "temp": 19.41,
        "feels_like": 19.42,
        "temp_min": 19.41,
        "temp_max": 19.41,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 999,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 71
      },
      "wind": {
        "speed": 4.62,
        "deg": 335,
        "gust": 9.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-18 09:00:00"
    },
    {
      "dt": 1631966400,
      "main": {
        "temp": 18.39,
        "feels_like": 17.8,
        "temp_min": 18.39,
        "temp_max": 18.39,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1001,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 85
      },
      "wind": {
        "speed": 4.3,
        "deg": 338,
        "gust": 9.56
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-18 12:00:00"
    },
    {
      "dt": 1631977200,
      "main": {
        "temp": 21.53,
        "feels_like": 20.97,
        "temp_min": 21.53,
        "temp_max": 21.53,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1002,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 74
      },
      "wind": {
        "speed": 3.19,
        "deg": 352,
        "gust": 4.15
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-18 15:00:00"
    },
    {
      "dt": 1631988000,
      "main": {
        "temp": 24.07,
        "feels_like": 23.42,
        "temp_min": 24.07,
        "temp_max": 24.07,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1001,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 37
      },
      "wind": {
        "speed": 1.77,
        "deg": 330,
        "gust": 2.68
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-18 18:00:00"
    },
    {
      "dt": 1631998800,
      "main": {
        "temp": 24.28,
        "feels_like": 23.65,
        "temp_min": 24.28,
        "temp_max": 24.28,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1001,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.53,
        "deg": 325,
        "gust": 4.29
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-18 21:00:00"
    },
    {
      "dt": 1632009600,
      "main": {
        "temp": 18.81,
        "feels_like": 17.92,
        "temp_min": 18.81,
        "temp_max": 18.81,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1002,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 14
      },
      "wind": {
        "speed": 4.55,
        "deg": 344,
        "gust": 8.62
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-19 00:00:00"
    },
    {
      "dt": 1632020400,
      "main": {
        "temp": 16.06,
        "feels_like": 15.13,
        "temp_min": 16.06,
        "temp_max": 16.06,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1003,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 19
      },
      "wind": {
        "speed": 3.7,
        "deg": 347,
        "gust": 7.92
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-19 03:00:00"
    },
    {
      "dt": 1632031200,
      "main": {
        "temp": 14.94,
        "feels_like": 14,
        "temp_min": 14.94,
        "temp_max": 14.94,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1003,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 46
      },
      "wind": {
        "speed": 2.38,
        "deg": 354,
        "gust": 5.04
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-19 06:00:00"
    },
    {
      "dt": 1632042000,
      "main": {
        "temp": 14.11,
        "feels_like": 13.06,
        "temp_min": 14.11,
        "temp_max": 14.11,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1004,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 49
      },
      "wind": {
        "speed": 1.94,
        "deg": 13,
        "gust": 3.22
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-19 09:00:00"
    },
    {
      "dt": 1632052800,
      "main": {
        "temp": 14.5,
        "feels_like": 13.44,
        "temp_min": 14.5,
        "temp_max": 14.5,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1005,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 51
      },
      "wind": {
        "speed": 1.52,
        "deg": 39,
        "gust": 2.23
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-19 12:00:00"
    },
    {
      "dt": 1632063600,
      "main": {
        "temp": 19,
        "feels_like": 18.34,
        "temp_min": 19,
        "temp_max": 19,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 1005,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 11
      },
      "wind": {
        "speed": 2.36,
        "deg": 115,
        "gust": 2.57
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-19 15:00:00"
    },
    {
      "dt": 1632074400,
      "main": {
        "temp": 20.84,
        "feels_like": 20.23,
        "temp_min": 20.84,
        "temp_max": 20.84,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1004,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 6
      },
      "wind": {
        "speed": 3.14,
        "deg": 128,
        "gust": 2.87
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-19 18:00:00"
    },
    {
      "dt": 1632085200,
      "main": {
        "temp": 21.03,
        "feels_like": 20.34,
        "temp_min": 21.03,
        "temp_max": 21.03,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1003,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.59,
        "deg": 116,
        "gust": 2.92
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-19 21:00:00"
    },
    {
      "dt": 1632096000,
      "main": {
        "temp": 18.32,
        "feels_like": 17.75,
        "temp_min": 18.32,
        "temp_max": 18.32,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1003,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.53,
        "deg": 97,
        "gust": 4.4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-20 00:00:00"
    },
    {
      "dt": 1632106800,
      "main": {
        "temp": 17.49,
        "feels_like": 17.12,
        "temp_min": 17.49,
        "temp_max": 17.49,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1003,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.52,
        "deg": 98,
        "gust": 5.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-20 03:00:00"
    },
    {
      "dt": 1632117600,
      "main": {
        "temp": 16.82,
        "feels_like": 16.54,
        "temp_min": 16.82,
        "temp_max": 16.82,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 1003,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.31,
        "deg": 101,
        "gust": 4.63
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-20 06:00:00"
    },
    {
      "dt": 1632128400,
      "main": {
        "temp": 16.22,
        "feels_like": 15.93,
        "temp_min": 16.22,
        "temp_max": 16.22,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1003,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.34,
        "deg": 98,
        "gust": 5.12
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-20 09:00:00"
    },
    {
      "dt": 1632139200,
      "main": {
        "temp": 16.53,
        "feels_like": 16.25,
        "temp_min": 16.53,
        "temp_max": 16.53,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1003,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.82,
        "deg": 100,
        "gust": 3.93
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-20 12:00:00"
    },
    {
      "dt": 1632150000,
      "main": {
        "temp": 20.91,
        "feels_like": 20.44,
        "temp_min": 20.91,
        "temp_max": 20.91,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 1003,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 43
      },
      "wind": {
        "speed": 2.68,
        "deg": 130,
        "gust": 3.83
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-20 15:00:00"
    },
    {
      "dt": 1632160800,
      "main": {
        "temp": 23.11,
        "feels_like": 22.76,
        "temp_min": 23.11,
        "temp_max": 23.11,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 1002,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 51
      },
      "wind": {
        "speed": 3.49,
        "deg": 115,
        "gust": 5.32
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-20 18:00:00"
    },
    {
      "dt": 1632171600,
      "main": {
        "temp": 23.28,
        "feels_like": 23.15,
        "temp_min": 23.28,
        "temp_max": 23.28,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1001,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 63
      },
      "wind": {
        "speed": 3.77,
        "deg": 103,
        "gust": 5.63
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-20 21:00:00"
    },
    {
      "dt": 1632182400,
      "main": {
        "temp": 21.36,
        "feels_like": 21.46,
        "temp_min": 21.36,
        "temp_max": 21.36,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1000,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 69
      },
      "wind": {
        "speed": 1.98,
        "deg": 100,
        "gust": 4.16
      },
      "visibility": 10000,
      "pop": 0.08,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-21 00:00:00"
    },
    {
      "dt": 1632193200,
      "main": {
        "temp": 20.44,
        "feels_like": 20.94,
        "temp_min": 20.44,
        "temp_max": 20.44,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 1001,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 3.32,
        "deg": 213,
        "gust": 10.98
      },
      "visibility": 10000,
      "pop": 0.44,
      "rain": {
        "3h": 0.98
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-21 03:00:00"
    },
    {
      "dt": 1632204000,
      "main": {
        "temp": 20.58,
        "feels_like": 20.81,
        "temp_min": 20.58,
        "temp_max": 20.58,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1000,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 98
      },
      "wind": {
        "speed": 5.47,
        "deg": 187,
        "gust": 12.95
      },
      "visibility": 10000,
      "pop": 0.31,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-21 06:00:00"
    },
    {
      "dt": 1632214800,
      "main": {
        "temp": 18.83,
        "feels_like": 19.09,
        "temp_min": 18.83,
        "temp_max": 18.83,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 1000,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 4.11,
        "deg": 178,
        "gust": 12.85
      },
      "visibility": 10000,
      "pop": 0.7,
      "rain": {
        "3h": 1.57
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-21 09:00:00"
    },
    {
      "dt": 1632225600,
      "main": {
        "temp": 18.3,
        "feels_like": 18.54,
        "temp_min": 18.3,
        "temp_max": 18.3,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 999,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 98
      },
      "wind": {
        "speed": 6.07,
        "deg": 190,
        "gust": 14.6
      },
      "visibility": 5193,
      "pop": 0.88,
      "rain": {
        "3h": 2.48
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-21 12:00:00"
    },
    {
      "dt": 1632236400,
      "main": {
        "temp": 18.78,
        "feels_like": 19.06,
        "temp_min": 18.78,
        "temp_max": 18.78,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 999,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.38,
        "deg": 179,
        "gust": 13.83
      },
      "visibility": 10000,
      "pop": 0.71,
      "rain": {
        "3h": 3.36
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-21 15:00:00"
    },
    {
      "dt": 1632247200,
      "main": {
        "temp": 21.55,
        "feels_like": 21.75,
        "temp_min": 21.55,
        "temp_max": 21.55,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 998,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.25,
        "deg": 189,
        "gust": 12.67
      },
      "visibility": 10000,
      "pop": 0.67,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-21 18:00:00"
    },
    {
      "dt": 1632258000,
      "main": {
        "temp": 21.83,
        "feels_like": 22.18,
        "temp_min": 21.83,
        "temp_max": 21.83,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 995,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.61,
        "deg": 191,
        "gust": 12.95
      },
      "visibility": 10000,
      "pop": 0.66,
      "rain": {
        "3h": 0.45
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-21 21:00:00"
    },
    {
      "dt": 1632268800,
      "main": {
        "temp": 20.87,
        "feels_like": 21.31,
        "temp_min": 20.87,
        "temp_max": 20.87,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 995,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 5.69,
        "deg": 186,
        "gust": 12.95
      },
      "visibility": 10000,
      "pop": 0.95,
      "rain": {
        "3h": 1.52
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-22 00:00:00"
    },
    {
      "dt": 1632279600,
      "main": {
        "temp": 19.99,
        "feels_like": 20.45,
        "temp_min": 19.99,
        "temp_max": 19.99,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 993,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.87,
        "deg": 194,
        "gust": 14.19
      },
      "visibility": 10000,
      "pop": 0.99,
      "rain": {
        "3h": 1.83
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-09-22 03:00:00"
    },
    {
      "dt": 1632290400,
      "main": {
        "temp": 15.7,
        "feels_like": 15.81,
        "temp_min": 15.7,
        "temp_max": 15.7,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 993,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.33,
        "deg": 319,
        "gust": 8.92
      },
      "visibility": 4827,
      "pop": 1,
      "rain": {
        "3h": 17.42
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-22 06:00:00"
    },
    {
      "dt": 1632301200,
      "main": {
        "temp": 15.16,
        "feels_like": 15.13,
        "temp_min": 15.16,
        "temp_max": 15.16,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 994,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 5.23,
        "deg": 320,
        "gust": 9.69
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 3.48
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-22 09:00:00"
    },
    {
      "dt": 1632312000,
      "main": {
        "temp": 12.78,
        "feels_like": 12.41,
        "temp_min": 12.78,
        "temp_max": 12.78,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 995,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.12,
        "deg": 331,
        "gust": 11.48
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 1.01
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-22 12:00:00"
    },
    {
      "dt": 1632322800,
      "main": {
        "temp": 12.57,
        "feels_like": 11.87,
        "temp_min": 12.57,
        "temp_max": 12.57,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 997,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.59,
        "deg": 328,
        "gust": 11.15
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-22 15:00:00"
    },
    {
      "dt": 1632333600,
      "main": {
        "temp": 13.44,
        "feels_like": 12.56,
        "temp_min": 13.44,
        "temp_max": 13.44,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 998,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.88,
        "deg": 329,
        "gust": 9.27
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-09-22 18:00:00"
    }
  ],
  "city": {
    "id": 6167865,
    "name": "Toronto",
    "coord": {
      "lat": 43.7001,
      "lon": -79.4163
    },
    "country": "CA",
    "population": 0,
    "timezone": -14400,
    "sunrise": 1631876373,
    "sunset": 1631921086
  }
}

export const forecastWeatherInfoColumns = [
  { name: 'date', label: 'Date', field: 'dt_txt' },
  { name: 'temp', label: 'Temp', field: 'main.temp', sortable: true, align: 'center'},
  { name: 'minTemp', label: 'Min Temp', field: 'main.temp_min', sortable: true, align: 'center' },
  { name: 'maxTemp', label: 'Max Temp', field: 'main.temp_max', sortable: true, align: 'center' },
  { name: 'wind', label: 'Wind', field: 'wind.speed', sortable: true, align: 'center' },
]

export const forecastWeatherOverviewColumns = [
  { name: 'date', label: 'Date', field: 'date', sortable: true, align: 'center' },
  { name: 'minTemp', label: 'Min Temp', field: 'tempMin', sortable: true, align: 'center' },
  { name: 'maxTemp', label: 'Max Temp', field: 'tempMax', sortable: true, align: 'center' },
]
