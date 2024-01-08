import { IProduct } from '@/global/types/types'
import { api } from '../../../global/api/api'
import { EditProductQuantityApiData } from '../types/types'

const productsApi = api.injectEndpoints({
	endpoints: builder => ({
		getProduct: builder.query<IProduct, number>({
			query: id => ({
				url: `/api/products/${id}`,
				credentials: 'same-origin'
			}),

			providesTags: () => ['Product']
		}),

		deleteProduct: builder.mutation<void, number>({
			query: id => ({
				url: `/api/products/${id}`,
				method: 'DELETE',
				credentials: 'same-origin'
			}),

			invalidatesTags: ['Product', 'ProductsLit']
		}),

		editProductQuantity: builder.mutation<void, EditProductQuantityApiData>({
			query: ({ id, data }) => ({
				body: data,
				url: `/api/products/${id}`,
				method: 'PATCH',
				credentials: 'same-origin'
			}),

			invalidatesTags: ['Product', 'ProductsLit']
		})
	})
})

export const {
	useGetProductQuery,
	useDeleteProductMutation,
	useEditProductQuantityMutation
} = productsApi
