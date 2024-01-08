import { Pressable } from 'react-native'
import React, { FC } from 'react'
import { IMenuItemProps } from './types/types'
import { Feather } from '@expo/vector-icons'
import { AppConstants } from '@/global/contants/constants'

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable
			className='w-[33%] flex-row justify-center items-center'
			onPress={() => nav(item.path)}
		>
			<Feather
				name={item.iconName}
				size={26}
				color={
					isActive ? AppConstants.primaryColor : AppConstants.secondaryColor
				}
			/>
		</Pressable>
	)
}

export default MenuItem
