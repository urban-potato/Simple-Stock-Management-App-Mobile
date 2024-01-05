import { Text, Pressable } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import cn from 'clsx'
import { IButton } from './types/types'

const Button: FC<PropsWithChildren<IButton>> = ({ children, className, onPress }) => {
	return (
		<Pressable
			className={cn(
				' self-center mt-3 bg-primaryColor py-3 px-8 rounded-xl justify-center items-center ',
				className
			)}
            onPress={onPress}
		>
			<Text className='font-semibold text-white text-xl '>{children}</Text>
		</Pressable>
	)
}

export default Button
