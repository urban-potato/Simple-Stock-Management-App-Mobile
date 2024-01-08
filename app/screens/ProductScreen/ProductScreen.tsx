import React, { FC } from 'react'
import Layout from '../Layout'
import { ProductCard } from '@/modules/ProductCard'
import { useRoute } from '@react-navigation/native'
import { ProductScreenProps } from './types/types'

const ProductScreen: FC<ProductScreenProps> = ({navigation}) => {
	const route = useRoute()
	const id = route.params?.id

	return (
		<Layout>
			<ProductCard id={id} navigation={navigation} />
		</Layout>
	)
}

export default ProductScreen
