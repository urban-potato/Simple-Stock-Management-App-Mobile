import { IProduct } from '@/global/types/types'
import { api } from '../../../global/api/api'
import { CreateProductData } from '../types/types'

const productsApi = api.injectEndpoints({
	endpoints: builder => ({
		createProduct: builder.mutation<void, CreateProductData>({
			query: data => ({
				body: data,
				url: '/api/products',
				method: 'POST',
				credentials: 'same-origin'
			}),

			invalidatesTags: ['Product', 'ProductsLit']
		})
	})
})

export const { useCreateProductMutation } = productsApi
