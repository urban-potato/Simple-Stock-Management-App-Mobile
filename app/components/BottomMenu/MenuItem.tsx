import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import { IMenuItemProps } from './types/types'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { AppConstants } from '@/global/contants/constants'

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable className='w-[33%] flex-row justify-center items-center' onPress={() => nav(item.path)}>
			{item.iconName === 'appstore-o' ? (
				<AntDesign
					name={item.iconName}
					size={26}
					color={
						isActive ? AppConstants.primaryColor : AppConstants.secondaryColor
					}
				/>
			) : item.iconName === 'map-pin' ? (
				<Feather
					name={item.iconName}
					size={26}
					color={
						isActive ? AppConstants.primaryColor : AppConstants.secondaryColor
					}
				/>
			) : item.iconName === 'attach-money' ? (
				<MaterialIcons
					name={item.iconName}
					size={26}
					color={
						isActive ? AppConstants.primaryColor : AppConstants.secondaryColor
					}
				/>
			) : (
				<View>
					<Text>Error</Text>
				</View>
			)}
		</Pressable>
	)
}

export default MenuItem
