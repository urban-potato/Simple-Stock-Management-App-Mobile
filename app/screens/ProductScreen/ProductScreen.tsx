import React, { FC } from 'react'
import Layout from '../Layout'
import { ProductCard } from '@/modules/ProductCard'
import { RouteProp, useRoute } from '@react-navigation/native'
import { ProductScreenProps } from './types/types'
import { TypeRootStackParamList } from '@/global/navigation/types/types'

const ProductScreen: FC<ProductScreenProps> = ({navigation}) => {
	const route = useRoute<RouteProp<TypeRootStackParamList, 'Product'>>()
	const id = route.params?.id

	return (
		<Layout>
			<ProductCard id={id} navigation={navigation} />
		</Layout>
	)
}

export default ProductScreen
