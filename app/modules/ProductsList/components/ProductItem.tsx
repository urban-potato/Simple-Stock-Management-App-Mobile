import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { IProduct } from '@/global/types/types'
import { AppConstants } from '@/global/contants/constants'
import { SimpleLineIcons } from '@expo/vector-icons'

const ProductItem: FC<IProduct> = ({
	id,
	brand,
	model,
	description,
	price,
	quantity
}) => {
	return (
		<View className='flex-row rounded-xl p-4 my-2 bg-primarySemiDarkColor justify-between'>
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
		</View>
	)
}

export default ProductItem
