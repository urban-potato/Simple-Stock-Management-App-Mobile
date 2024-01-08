import { TypeRootStackParamList } from '@/global/navigation/types/types'
import { IProduct } from '@/global/types/types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export interface EditProductApiData {
	id: number
	data: EditProductData
}

export interface EditProductData {
	brand?: string
	model?: string
	description?: string
	price?: number
	quantity?: number
}

export interface ProductEditFormData {
	navigation: NativeStackNavigationProp<
		TypeRootStackParamList,
		'EditProduct',
		undefined
	>
	product: IProduct
}
