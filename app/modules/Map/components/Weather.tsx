import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGerWeatherMutation } from '../api/weather.api'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AppConstants } from '@/global/contants/constants'

const Weather = () => {
	let [doGetWeather] = useGerWeatherMutation()
	let [temperature, setTemperature] = useState<number | null>(null)

	const city = 'Krasnoyarsk'

	const getWeather = (city: string) => {
		doGetWeather(city)
			.unwrap()
			.then(data => {
				setTemperature(Math.round(data.main.temp))
			})
			.catch(error => {
				console.log(`There was an error:\n${error}`)
			})
	}

	useEffect(() => {
		getWeather(city)
	}, [])

	return (
		<View className='flex-row justify-center items-center py-2 '>
			<MaterialCommunityIcons
				name='weather-cloudy'
				size={30}
				color={AppConstants.secondaryLightColor}
			/>

			<Text className='text-xl text-secondaryLightColor ml-2'>
				{city}: {temperature} °C
			</Text>
		</View>
	)
}

export default Weather
