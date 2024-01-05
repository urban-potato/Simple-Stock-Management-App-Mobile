import { TypeRootStackParamList } from '@/global/navigation/types/types'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

export interface IBottomMenu {
	nav: TypeNav
	currentRoute?: string
}

export interface IMenuItem {
	iconName:
		| keyof typeof AntDesign.glyphMap
		| keyof typeof Feather.glyphMap
		| keyof typeof MaterialIcons.glyphMap
	path: keyof TypeRootStackParamList
}

export interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

export type TypeNav = (name: keyof TypeRootStackParamList) => void
