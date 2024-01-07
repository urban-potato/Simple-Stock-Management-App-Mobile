import { FlatList } from 'react-native'
import React from 'react'
import { useGetAllProductsQuery } from '../api/products.api'
import ProductItem from './ProductItem'

const ProductsList = () => {
	const {
		isLoading: isLoadingGetAllProducts,
		data: dataGetAllProducts,
		error: errorGetAllProducts
	} = useGetAllProductsQuery(undefined)

	return (
		<FlatList
			data={dataGetAllProducts}
			renderItem={({ item }) => (
				<ProductItem
					id={item.id}
					brand={item.brand}
					model={item.model}
					description={item.description}
					price={item.price}
					quantity={item.quantity}
					key={item.id}
				/>
			)}
			className=''
		/>
	)
}

export default ProductsList
