import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { URL } from '@env'

const baseURL = URL ?? ''

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['ProductsLit', 'Product'],
	baseQuery: fetchBaseQuery({
		baseUrl: baseURL,
		prepareHeaders: headers => {
			return headers
		},
		credentials: 'same-origin'
	}),

	endpoints: () => ({})
})
