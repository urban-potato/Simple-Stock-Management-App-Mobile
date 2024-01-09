import { View } from 'react-native'
import React, { FC } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Weather from './Weather'

const Map: FC = () => {
	return (
		<View className='flex-1'>
			<MapView
				className='flex-grow'
				initialRegion={{
					latitude: 55.99434289869557,
					longitude: 92.79753730675864,
					latitudeDelta: 0.09,
					longitudeDelta: 0.02
				}}
			>
				<Marker
					coordinate={{
						latitude: 55.99434289869557,
						longitude: 92.79753730675864
					}}
					title={'Selling point'}
					description={'Selling point'}
				/>
				<Marker
					coordinate={{
						latitude: 56.022228992785216,
						longitude: 92.79729439556921
					}}
					title={'Stock'}
					description={'Stock'}
				/>
			</MapView>

			<Weather />
		</View>
	)
}

export default Map
