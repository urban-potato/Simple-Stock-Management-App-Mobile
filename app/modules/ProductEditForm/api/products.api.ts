import { api } from '../../../global/api/api'
import { EditProductApiData } from '../types/types'

const productsApi = api.injectEndpoints({
	endpoints: builder => ({
		editProduct: builder.mutation<void, EditProductApiData>({
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

export const { useEditProductMutation } = productsApi
