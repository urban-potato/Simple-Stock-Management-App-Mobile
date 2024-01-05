import React, { FC } from 'react'
import { Control } from 'react-hook-form'
import { ICreateProductData } from '../types/types'
import Input from '@/ui/Input/Input'

const ProductCreateFormFields: FC<{
	control: Control<ICreateProductData>
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
				name='price'
				placeholder='Enter Price'
				rules={{
					required: 'Price is required',
					pattern: {
						value: '/^[0-9]+$/',
						message: 'Enter number'
					}
				}}
				keyboardType='numeric'
			/>

			<Input
				control={control}
				name='ram'
				placeholder='Enter RAM'
				rules={{
					required: 'RAM is required',
					pattern: {
						value: '/^[0-9]+$/',
						message: 'Enter number'
					}
				}}
				keyboardType='numeric'
			/>

			<Input
				control={control}
				name='storage'
				placeholder='Enter Storage'
				rules={{
					required: 'Storage is required',
					pattern: {
						value: '/^[0-9]+$/',
						message: 'Enter number'
					}
				}}
				keyboardType='numeric'
			/>
		</>
	)
}

export default ProductCreateFormFields
