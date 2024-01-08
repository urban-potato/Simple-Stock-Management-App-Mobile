import { View, Text, Alert } from 'react-native'
import React, { FC } from 'react'
import {
	useDeleteProductMutation,
	useEditProductQuantityMutation,
	useGetProductQuery
} from '../api/products.api'
import { ProductCardData } from '../types/types'
import ProductCharacteristic from './ProductCharacteristic'
import { numberFormatter } from '@/global/helpers/numberFormatter'
import Loader from '@/ui/Loader/Loader'
import Button from '@/ui/Button/Button'

const ProductCard: FC<ProductCardData> = ({ id, navigation }) => {
	const {
		isLoading: isLoadingGetProduct,
		data: dataGetProduct,
		error: errorGetProduct
	} = useGetProductQuery(id)

	const [doDeleteProduct, doDeleteProductResult] = useDeleteProductMutation()
	const [doEditProductQuantity, doEditProductQuantityResult] =
		useEditProductQuantityMutation()

	const handleDelete = (id: number) => {
		doDeleteProduct(id)
			.unwrap()
			.then(() => {
				navigation.navigate('Home')
			})
			.catch(error => {
				console.log(`There was an error:\n${error}`)

				Alert.alert(`There was an error:\n${error.error}`)
			})
	}

	const handleDecreaseQuantity = (id: number, quantity: number) => {
		const newQuantity = quantity - 1

		if (newQuantity < 0) {
			Alert.alert(`Minimum value reached: 0`)
		} else {
			const submitData = {
				id: id,
				data: {
					quantity: newQuantity
				}
			}

			doEditProductQuantity(submitData)
				.unwrap()
				.then(() => {})
				.catch(error => {
					console.log(`There was an error:\n${error}`)

					Alert.alert(`There was an error:\n${error.error}`)
				})
		}
	}

	const handleIncreaseQuantity = (id: number, quantity: number) => {
		const newQuantity = quantity + 1

		if (newQuantity > 9999999) {
			Alert.alert(`Maximum value reached: 9999999`)
		} else {
			const submitData = {
				id: id,
				data: {
					quantity: newQuantity
				}
			}

			doEditProductQuantity(submitData)
				.unwrap()
				.then(() => {})
				.catch(error => {
					console.log(`There was an error:\n${error}`)

					Alert.alert(`There was an error:\n${error.error}`)
				})
		}
	}

	return (
		<View className='flex-1 justify-center items-center'>
			{dataGetProduct ? (
				<View className='w-full'>
					<View className='rounded-xl p-4 my-2 bg-primarySemiDarkColor justify-between w-full'>
						<ProductCharacteristic name='ID:' value={dataGetProduct?.id} />
						<ProductCharacteristic
							name='Brand:'
							value={dataGetProduct?.brand}
						/>
						<ProductCharacteristic
							name='Model:'
							value={dataGetProduct?.model}
						/>
						<ProductCharacteristic
							name='Description:'
							value={dataGetProduct?.description}
						/>
						<ProductCharacteristic
							name='Price:'
							value={numberFormatter(dataGetProduct?.price)}
						/>
						<View className='flex-row w-full justify-center items-center mt-5'>
							<Button
								onPress={() => {
									handleDecreaseQuantity(
										dataGetProduct?.id,
										dataGetProduct?.quantity
									)
								}}
								disabled={dataGetProduct?.quantity === 0 ? true : false}
								classNames={
									dataGetProduct?.quantity === 0
										? 'my-3 bg-secondaryColor'
										: 'my-3 '
								}
							>
								-
							</Button>

							{/* <View className='bg-secondaryLightColor py-2 px-8 rounded-xl mx-2'>
								<Text className='text-3xl font-bold text-primaryDarkColor '>
									{dataGetProduct?.quantity}
								</Text>
							</View> */}

							<Text className='text-3xl font-bold text-secondaryLightColor mx-5'>
								{dataGetProduct?.quantity}
							</Text>

							<Button
								onPress={() => {
									handleIncreaseQuantity(
										dataGetProduct?.id,
										dataGetProduct?.quantity
									)
								}}
								disabled={dataGetProduct?.quantity === 9999999 ? true : false}
								classNames={
									dataGetProduct?.quantity === 9999999
										? 'my-3 bg-secondaryColor'
										: 'my-3 '
								}
							>
								+
							</Button>
						</View>
					</View>
					<View className='flex-row justify-between items-center'>
						<Button
							onPress={() => {
								handleDelete(id)
							}}
							classNames='my-3 flex-grow mr-2'
						>
							DELETE
						</Button>
						<Button
							onPress={() => {
								navigation.navigate('EditProduct', { product: dataGetProduct })
							}}
							classNames='my-3 flex-grow ml-2'
						>
							EDIT
						</Button>
					</View>
				</View>
			) : (
				<Loader />
			)}
		</View>
	)
}

export default ProductCard
