import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	Product: undefined
	Map: undefined
	Currency: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
