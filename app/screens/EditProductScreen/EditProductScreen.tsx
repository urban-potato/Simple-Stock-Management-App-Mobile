import React, { FC } from 'react'
import Layout from '../Layout'
import { EditProductScreenProps } from './types/types'
import { ProductEditForm } from '@/modules/ProductEditForm'
import { RouteProp, useRoute } from '@react-navigation/native'
import { TypeRootStackParamList } from '@/global/navigation/types/types'

const EditProductScreen: FC<EditProductScreenProps> = ({ navigation }) => {
	const route = useRoute<RouteProp<TypeRootStackParamList, 'EditProduct'>>()
	const product = route.params?.product

	return (
		<Layout>
			<ProductEditForm navigation={navigation} product={product} />
		</Layout>
	)
}

export default EditProductScreen
