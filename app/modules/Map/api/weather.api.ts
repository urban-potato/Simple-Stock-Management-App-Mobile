import { api } from '../../../global/api/api'
import { WEATHER_API_KEY } from '@env'

const weatherApi = api.injectEndpoints({
	endpoints: builder => ({
		gerWeather: builder.mutation({
			query: city => ({
				url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`,
				method: 'GET',
				credentials: 'same-origin'
			}),

			invalidatesTags: ['Weather']
		})
	})
})

export const { useGerWeatherMutation } = weatherApi
