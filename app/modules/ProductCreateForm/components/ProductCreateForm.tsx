import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	Alert
} from 'react-native'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ICreateProductData } from '../types/types'
import { useCreateSmartphoneProductMutation } from '../api/product.api'
import Loader from '@/ui/Loader/Loader'
import Button from '@/ui/Button/Button'
import ProductCreateFormFields from './ProductCreateFormFields'

const ProductCreateForm = () => {
	const { reset, handleSubmit, control } = useForm<ICreateProductData>({
		mode: 'onChange'
	})

	const [doCreateSmartphoneProduct, doCreateSmartphoneProductResult] =
		useCreateSmartphoneProductMutation()

	const onSubmit: SubmitHandler<ICreateProductData> = data => {
		const { brand, model, price, ram, storage } = data

		const submitData = {
			category: 'smartphone',
			image: 'no_image',
			brand: brand,
			model: model,
			price: price,
			ram: ram,
			storage: storage
		}

		// console.log('submitData')
		// console.log(submitData)

		doCreateSmartphoneProduct(submitData)
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
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='flex-1 justify-center items-center'>
				<View className='w-3/4'>
					<Text className='text-white text-3xl font-bold text-center mb-5'>
						Create New Product
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<ProductCreateFormFields control={control} />
							<Button onPress={handleSubmit(onSubmit)} className=''>
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
