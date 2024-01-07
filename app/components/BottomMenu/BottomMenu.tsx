import { View } from 'react-native'
import React, { FC } from 'react'
import { IBottomMenu } from './types/types'
import { menuData } from './constants/constants'
import MenuItem from './MenuItem'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BottomMenu: FC<IBottomMenu> = ({ currentRoute, nav }) => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className='pt-[13px] px-3 flex-row justify-center items-center w-full bg-primaryDarkColor'
			style={{
				paddingBottom: bottom + 13
			}}
		>
			{menuData.map(item => (
				<MenuItem
					nav={nav}
					item={item}
					currentRoute={currentRoute}
					key={item.path}
				/>
			))}
		</View>
	)
}

export default BottomMenu
