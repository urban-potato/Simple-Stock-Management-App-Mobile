import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import BottomMenu from '@/components/BottomMenu/BottomMenu'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from './types/types'
import { routes } from './routes'
import { AppConstants } from '../contants/constants'

let ignore = SplashScreen.preventAutoHideAsync()
const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation = () => {
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)

	const navRef = useNavigationContainerRef()

	useEffect(() => {
		SplashScreen.hideAsync()

		setCurrentRoute(navRef.getCurrentRoute()?.name)

		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute?.name)
		)

		// console.log(currentRoute)

		return () => {
			navRef.removeListener('state', listener)
		}
	}, [currentRoute])

	return (
		<>
			<NavigationContainer ref={navRef}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						contentStyle: {
							backgroundColor: AppConstants.primaryDarkColor
						}
					}}
				>
					{routes.map(route => (
						<Stack.Screen
							key={route.name}
							name={route.name}
							component={route.component}
						/>
					))}
				</Stack.Navigator>
			</NavigationContainer>

			<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />

			{/* {currentRoute ? (
				<BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
			) : (<View><Text>No CR</Text></View>)} */}
		</>
	)
}

export default Navigation
