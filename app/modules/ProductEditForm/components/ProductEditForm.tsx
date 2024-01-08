import {
	View,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	Alert
} from 'react-native'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Loader from '@/ui/Loader/Loader'
import Button from '@/ui/Button/Button'
import {
	EditProductApiData,
	EditProductData,
	ProductEditFormData
} from '../types/types'
import { useEditProductMutation } from '../api/products.api'
import ProductEditFormFields from './ProductEditFormFields'

const ProductEditForm: FC<ProductEditFormData> = ({ navigation, product }) => {
	const defaultValues = {
		brand: product.brand,
		model: product.model,
		description: product.description,
		price: product.price.toString(),
		quantity: product.quantity.toString()
	}

	const { reset, handleSubmit, control } = useForm<EditProductData>({
		mode: 'onChange',
		defaultValues: defaultValues
	})

	const [doEditProduct, doEditProductResult] = useEditProductMutation()

	const onSubmit: SubmitHandler<EditProductData> = data => {
		let submitData: EditProductApiData = {
			id: product.id,
			data: {}
		}

		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				if (!!data[key as keyof EditProductData] || key === 'description') {
					submitData.data[key as keyof EditProductData] =
						data[key as keyof EditProductData]?.toString()
				}
			}
		}

		doEditProduct(submitData)
			.unwrap()
			.then(() => {
				console.log('Product edited')
				navigation.navigate('Product', { id: product.id })
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
				<View className='w-10/12'>
					<Text className='text-white text-3xl font-bold text-center mb-5'>
						Edit Product
					</Text>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<ProductEditFormFields control={control} />
							<View className='flex-row justify-between items-center'>
								<Button
									onPress={() => {
										navigation.navigate('Product', { id: product.id })
									}}
									classNames='mt-3 mr-2 flex-grow bg-secondaryColor'
								>
									CANCEL
								</Button>
								<Button
									onPress={handleSubmit(onSubmit)}
									classNames='mt-3 flex-grow ml-2'
								>
									SAVE
								</Button>
							</View>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default ProductEditForm
