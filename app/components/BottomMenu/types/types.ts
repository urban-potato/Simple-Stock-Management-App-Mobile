import { TypeRootStackParamList } from '@/global/navigation/types/types'
import { Feather } from '@expo/vector-icons'

export interface IBottomMenu {
	nav: TypeNav
	currentRoute?: string
}

export interface IMenuItem {
	iconName: keyof typeof Feather.glyphMap
	path: keyof TypeRootStackParamList
}

export interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void
