import { IRoute } from './types/types'
import ProductScreen from '@/screens/ProductScreen/ProductScreen'
import MapScreen from '@/screens/MapScreen/MapScreen'
import CreateProductScreen from '@/screens/CreateProductScreen/CreateProductScreen'
import HomeScreen from '@/screens/HomeScreen/HomeScreen'
import EditProductScreen from '@/screens/EditProductScreen/EditProductScreen'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: HomeScreen
	},
	{
		name: 'CreateProduct',
		component: CreateProductScreen
	},
	{
		name: 'Product',
		component: ProductScreen
	},
	{
		name: 'EditProduct',
		component: EditProductScreen
	},
	{
		name: 'Map',
		component: MapScreen
	}
]
