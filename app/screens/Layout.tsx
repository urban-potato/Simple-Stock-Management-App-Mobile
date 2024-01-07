import { View } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const insets = useSafeAreaInsets()

	return (
		<View
			style={{
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
				paddingLeft: insets.left,
				paddingRight: insets.right
			}}
			className='flex-1'
		>
			<View className='flex-1 px-6'>{children}</View>
		</View>
	)
}

export default Layout
