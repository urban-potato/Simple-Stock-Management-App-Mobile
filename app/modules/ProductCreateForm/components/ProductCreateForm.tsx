import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	Alert
} from 'react-native'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useCreateProductMutation } from '../api/products.api'
import Loader from '@/ui/Loader/Loader'
import Button from '@/ui/Button/Button'
import ProductCreateFormFields from './ProductCreateFormFields'
import { CreateProductData } from '../types/types'

const ProductCreateForm = () => {
	const { reset, handleSubmit, control } = useForm<CreateProductData>({
		mode: 'onChange'
	})

	const [doCreateProduct, doCreateProductResult] = useCreateProductMutation()

	const onSubmit: SubmitHandler<CreateProductData> = data => {
		const { brand, model, description, price, quantity } = data

		const submitData = {
			brand: brand,
			model: model,
			description: description,
			price: price,
			quantity: quantity
		}

		doCreateProduct(submitData)
			.unwrap()
			.then(() => {
				console.log('Product created')

				Alert.alert('Product created')
				reset()
			})
			.catch(error => {
				console.log(`There was an error:\n${error}`)

				Alert.alert(`There was an error:\n${error.error}`)
			})
	}

	let isLoading = false

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} className='w-full'>
			<View className='flex-1 justify-center items-center w-full'>
				<View className='w-11/12'>
					<Text className='text-white text-3xl font-bold text-center mb-5'>
						Create New Product
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<ProductCreateFormFields control={control} />
							<Button onPress={handleSubmit(onSubmit)} classNames='mt-3'>
								Save
							</Button>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ProductCreateForm
