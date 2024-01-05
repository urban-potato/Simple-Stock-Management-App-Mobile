import HomeScreen from '@/screens/HomeScreen/HomeScreen'
import { IRoute } from './types/types'
import ProductScreen from '@/screens/ProductScreen/ProductScreen'
import MapScreen from '@/screens/MapScreen/MapScreen'
import CurrencyScreen from '@/screens/CurrencyScreen/CurrencyScreen'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: HomeScreen
	},
	{
		name: 'Product',
		component: ProductScreen
	},
	{
		name: 'Map',
		component: MapScreen
	},
	{
		name: 'Currency',
		component: CurrencyScreen
	}
]
