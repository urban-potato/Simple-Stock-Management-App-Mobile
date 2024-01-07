import { IProduct } from "@/global/types/types";
import { api } from "../../../global/api/api";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: `/api/products`,
        credentials: "same-origin",
      }),

      providesTags: () => [
        {
          type: "ProductsLit",
        },
      ],
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
