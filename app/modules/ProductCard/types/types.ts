import { TypeRootStackParamList } from '@/global/navigation/types/types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type ProductCardData = {
	id: number
	navigation: NativeStackNavigationProp<
		TypeRootStackParamList,
		'Product',
		undefined
	>
}

export interface ProductCharacteristicData {
	name: string
	value: string | number
}

export interface EditProductQuantityApiData {
	id: number
	data: {
		quantity: number
	}
}
