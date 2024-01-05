import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Button from '@/ui/Button/Button'
import { HomeScreenProps } from './types/types'

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<View className='text-white mt-14 justify-center items-center '>
			<View className=' mb-10 w-full items-center border border-white rounded-3xl p-3'>
				<Text className='text-white text-2xl text-center font-bold '>
					Admin Panel
				</Text>

				<Button
					onPress={() => {
						navigation.navigate('CreateProduct')
					}}
					className=''
				>
					CREATE PRODUCT
				</Button>
			</View>

			<Text className='text-white'>HomeScreen</Text>
		</View>
	)
}

export default HomeScreen
