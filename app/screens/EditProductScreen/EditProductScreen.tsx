import React, { FC } from 'react'
import Layout from '../Layout'
import { EditProductScreenProps } from './types/types'
import { ProductEditForm } from '@/modules/ProductEditForm'
import { useRoute } from '@react-navigation/native'

const EditProductScreen: FC<EditProductScreenProps> = ({ navigation }) => {
	const route = useRoute()
	const product = route.params?.product

	return (
		<Layout>
			<ProductEditForm navigation={navigation} product={product} />
		</Layout>
	)
}

export default EditProductScreen
