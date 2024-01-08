import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import { IProduct } from '@/global/types/types'
import { AppConstants } from '@/global/contants/constants'
import { SimpleLineIcons } from '@expo/vector-icons'
import { ProductItemData } from '../types/types'

const ProductItem: FC<ProductItemData> = ({
	id,
	brand,
	model,
	description,
	price,
	quantity,
	navigation
}) => {
	return (
		<Pressable
			className='flex-row flex-wrap rounded-xl p-4 my-2 bg-primarySemiDarkColor justify-between'
			onPress={() => {
				navigation.navigate('Product', { id: id })
			}}
		>
			<View>
				<Text className='text-xl font-bold text-secondaryLightColor'>
					ID: {id}
				</Text>
				<Text className='text-xl font-bold text-secondaryLightColor'>
					{brand} {model}
				</Text>
			</View>

			<View className='flex-row justify-center items-center gap-x-2 mt-1'>
				<Text className='text-3xl font-bold text-secondaryLightColor'>
					{quantity}
				</Text>
				<SimpleLineIcons
					name='arrow-right'
					size={22}
					color={AppConstants.secondaryColor}
				/>
			</View>
		</Pressable>
	)
}

export default ProductItem
