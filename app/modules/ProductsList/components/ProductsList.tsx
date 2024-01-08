import { FlatList } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useGetAllProductsQuery } from '../api/products.api'
import ProductItem from './ProductItem'
import { HomeScreenProps } from '@/screens/HomeScreen/types/types'
import { ProductsListData } from '../types/types'
import { IProduct } from '@/global/types/types'

const ProductsList: FC<ProductsListData> = ({ navigation }) => {
	const {
		isLoading: isLoadingGetAllProducts,
		data: dataGetAllProducts,
		error: errorGetAllProducts
	} = useGetAllProductsQuery(undefined)

	// useEffect(() => {}, [dataGetAllProducts])

	return (
		<FlatList
			data={
				dataGetAllProducts &&
				[...dataGetAllProducts].sort((a: IProduct, b: IProduct) => a.id - b.id)
			}
			renderItem={({ item }) => (
				<ProductItem
					id={item.id}
					brand={item.brand}
					model={item.model}
					description={item.description}
					price={item.price}
					quantity={item.quantity}
					navigation={navigation}
					key={item.id}
				/>
			)}
			className=''
		/>
	)
}

export default ProductsList
