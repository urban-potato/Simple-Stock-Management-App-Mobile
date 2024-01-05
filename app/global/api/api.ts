import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = 'http://localhost:9090/'

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
