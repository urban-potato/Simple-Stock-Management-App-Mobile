import Navigation from '@/global/navigation/Navigation'
import store from '@/global/store/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator()

/*
TODO:
	[+] - Navigation
	[+] - Create Product Screen
	[ ] - Products Screen (Home)
	[ ] - Product Screen
	[ ] - Change Product Screen
	[ ] - Customize Alerts
	[ ] - Map
	[ ] - Currency API
*/

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<Navigation />
				<StatusBar style='light' />
			</SafeAreaProvider>
		</Provider>
	)
}
