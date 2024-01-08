import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { ProductCharacteristicData } from '../types/types'

const ProductCharacteristic: FC<ProductCharacteristicData> = ({
	name,
	value
}) => {
	return (
		<View className='flex-row gap-x-1 mb-2'>
			<Text className='text-[22px] font-bold text-secondaryLightColor'>
				{name}
			</Text>
			<Text className='text-[22px] text-secondaryLightColor'>
				{value === 0 || value ? value : 'no info'}
			</Text>
		</View>
	)
}

export default ProductCharacteristic
