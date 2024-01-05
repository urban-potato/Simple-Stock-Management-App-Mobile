import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import cn from 'clsx'
import { IInputProps } from './types/types'

const Input: FC<IInputProps> = ({
	control,
	name,
	rules,
	placeholder,
	keyboardType
}) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							'rounded-xl bg-[#272541] border my-2',
							!!error ? 'border-red-500' : 'border-transparent'
						)}
					>
						<TextInput
							placeholder={placeholder}
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							autoCapitalize='none'
							className='text-white text-lg p-4'
							placeholderTextColor='#6F6F9D'
							keyboardType={keyboardType}
						/>
					</View>
					{error && <Text className='text-red-500'>{error.message}</Text>}
				</>
			)}
		/>
	)
}

export default Input
