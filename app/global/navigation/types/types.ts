import { IProduct } from '@/global/types/types'
import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	CreateProduct: undefined
	Product: { id: number }
	EditProduct: { product: IProduct }
	Map: undefined
	Currency: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType<any>
}
