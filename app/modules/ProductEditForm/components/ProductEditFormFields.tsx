import React, { FC } from 'react'
import { Control } from 'react-hook-form'
import Input from '@/ui/Input/Input'
import { EditProductData } from '../types/types'

const ProductEditFormFields: FC<{
	control: Control<EditProductData>
}> = ({ control }) => {
	return (
		<>
			<Input
				control={control}
				name='brand'
				placeholder='Enter Brand'
				rules={{
					maxLength: {
						value: 256,
						message: 'Maximum length is 256'
					}
				}}
				keyboardType='default'
			/>

			<Input
				control={control}
				name='model'
				placeholder='Enter Model'
				rules={{
					maxLength: {
						value: 256,
						message: 'Maximum length is 256'
					}
				}}
				keyboardType='default'
			/>

			<Input
				control={control}
				name='description'
				placeholder='Enter Description'
				rules={{
					maxLength: {
						value: 256,
						message: 'Maximum length is 256'
					}
				}}
				keyboardType='default'
			/>

			<Input
				control={control}
				name='price'
				placeholder='Enter Price'
				rules={{
					pattern: {
						value: eval('/^\\d+$/'),
						message: 'Enter number'
					},
					min: {
						value: 0,
						message: 'Minimum value is 0'
					},
					max: {
						value: 9999999,
						message: 'Maximum value is 9999999'
					}
				}}
				keyboardType='numeric'
			/>

			<Input
				control={control}
				name='quantity'
				placeholder='Enter Quantity'
				rules={{
					pattern: {
						value: eval('/^\\d+$/'),
						message: 'Enter number'
					},
					min: {
						value: 0,
						message: 'Minimum value is 0'
					},
					max: {
						value: 9999999,
						message: 'Maximum value is 9999999'
					}
				}}
				keyboardType='numeric'
			/>
		</>
	)
}

export default ProductEditFormFields
