import Navigation from '@/global/navigation/Navigation'
import store from '@/global/store/store'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator()

/*
TODO:
	[+] - Navigation
	[ ] - Products Page (Home)
	[ ] - Product Page
	[ ] - Map
	[ ] - Currency API
*/

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				{/* <SafeAreaView> */}
				<Navigation />
				<StatusBar style='light' />
				{/* </SafeAreaView> */}
			</SafeAreaProvider>
		</Provider>
	)
}
