import { Text, Pressable } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import cn from 'clsx'
import { IButton } from './types/types'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	classNames,
	...rest
}) => {
	return (
		<Pressable
			className={cn(
				' self-center bg-primaryColor py-3 px-8 rounded-xl justify-center items-center ',
				classNames
			)}
			{...rest}
		>
			<Text className='font-semibold text-white text-xl '>{children}</Text>
		</Pressable>
	)
}

export default Button
