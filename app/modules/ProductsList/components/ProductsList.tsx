import { FlatList, View, Text } from 'react-native'
import React, { FC } from 'react'
import { useGetAllProductsQuery } from '../api/products.api'
import ProductItem from './ProductItem'
import { ProductsListData } from '../types/types'
import { IProduct } from '@/global/types/types'
import Loader from '@/ui/Loader/Loader'

const ProductsList: FC<ProductsListData> = ({ navigation }) => {
	const {
		isLoading: isLoadingGetAllProducts,
		data: dataGetAllProducts,
		error: errorGetAllProducts
	} = useGetAllProductsQuery(undefined)

	return (
		<>
			{dataGetAllProducts ? (
				dataGetAllProducts.length > 0 ? (
					<FlatList
						data={
							dataGetAllProducts &&
							[...dataGetAllProducts].sort(
								(a: IProduct, b: IProduct) => a.id - b.id
							)
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
				) : (
					<View className='flex-1 justify-center items-center'>
						<Text className='text-xl text-secondaryLightColor'>
							No Products
						</Text>
					</View>
				)
			) : (
				<View className='flex-1 justify-center items-center'>
					<Loader />
				</View>
			)}
		</>
	)
}

export default ProductsList
