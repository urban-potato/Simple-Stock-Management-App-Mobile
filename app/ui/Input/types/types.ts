import { TextInputProps } from 'react-native'
import { Control } from 'react-hook-form'

// export interface IInputProps {
// 	control: Control<any>
// 	name: string
// 	rules: any
// 	placeholder: string
// 	keyboardType: string
// }

export type IInputProps = {
	control: Control<any>
	name: string
	rules: any
} & TextInputProps
