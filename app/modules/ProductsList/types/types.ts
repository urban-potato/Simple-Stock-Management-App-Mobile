import { TypeRootStackParamList } from '@/global/navigation/types/types'
import { IProduct } from '@/global/types/types'
import { HomeScreenProps } from '@/screens/HomeScreen/types/types'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export interface ProductItemData extends IProduct {
	navigation: NativeStackNavigationProp<
		TypeRootStackParamList,
		'Home',
		undefined
	>
}

export interface ProductsListData {
	navigation: NativeStackNavigationProp<
		TypeRootStackParamList,
		'Home',
		undefined
	>
}
