import React, { FC } from 'react'
import { Control } from 'react-hook-form'
import { IProduct } from '../../../global/types/types'
import Input from '@/ui/Input/Input'

const ProductCreateFormFields: FC<{
	control: Control<IProduct>
}> = ({ control }) => {
	return (
		<>
			<Input
				control={control}
				name='brand'
				placeholder='Enter Brand'
				rules={{ required: 'Brand is required' }}
				keyboardType='default'
			/>

			<Input
				control={control}
				name='model'
				placeholder='Enter Model'
				rules={{ required: 'Model is required' }}
				keyboardType='default'
			/>

			<Input
				control={control}
				name='description'
				placeholder='Enter Description'
				rules={{}}
				keyboardType='default'
			/>

			<Input
				control={control}
				name='price'
				placeholder='Enter Price'
				rules={{
					required: 'Price is required',
					pattern: {
						value: '/^[0-9]+$/',
						message: 'Enter number'
					},
					min: {
						value: 0,
						message: 'Minimum value is 0'
					}
				}}
				keyboardType='numeric'
			/>

			<Input
				control={control}
				name='quantity'
				placeholder='Enter Quantity'
				rules={{
					required: 'Quantity is required',
					pattern: {
						value: '/^[0-9]+$/',
						message: 'Enter number'
					},
					min: {
						value: 0,
						message: 'Minimum value is 0'
					}
				}}
				keyboardType='numeric'
			/>
		</>
	)
}

export default ProductCreateFormFields
