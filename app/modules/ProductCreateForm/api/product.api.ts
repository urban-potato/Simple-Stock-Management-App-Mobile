import { api } from '../../../global/api/api'

const smartphoneApi = api.injectEndpoints({
	endpoints: builder => ({
		createSmartphoneProduct: builder.mutation({
			query: data => ({
				body: data,
				url: '/api/shop/smartphone',
				method: 'POST',
				credentials: 'same-origin'
			}),

			invalidatesTags: ['Product', 'ProductsLit']
		})
	})
})

export const { useCreateSmartphoneProductMutation } = smartphoneApi
