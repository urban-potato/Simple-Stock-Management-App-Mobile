import React, { FC } from 'react'
import Button from '@/ui/Button/Button'
import { HomeScreenProps } from './types/types'
import { ProductsList } from '@/modules/ProductsList'
import Layout from '../Layout'

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<Layout>
			<ProductsList navigation={navigation} />
		</Layout>
	)
}

export default HomeScreen
