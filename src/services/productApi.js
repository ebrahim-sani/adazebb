import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = "https://slemtech.com/inventory/";

// http://104.217.254.111/inventory/
// http://localhost:3500/

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (product) => ({
        url: "CreateProduct",
        method: "POST",
        body: product,
      }),
    }),

    createProductCategory: builder.mutation({
      query: (productCategory) => ({
        url: "CreateProductCategory",
        method: "POST",
        body: productCategory,
      }),
    }),

    placeOrder: builder.mutation({
      query: (orderDetail) => ({
        url: "PlaceOrder",
        method: "POST",
        body: orderDetail,
      }),
    }),

    addStock: builder.mutation({
      query: (items) => ({
        url: "AddStock",
        method: "POST",
        body: items,
      }),
    }),

    removeStock: builder.mutation({
      query: (stockItem) => ({
        url: "RemoveStock",
        method: "POST",
        body: stockItem,
      }),
    }),

    makeOrder: builder.mutation({
      query: (orderBody) => ({
        url: "MakeOrder",
        method: "POST",
        body: orderBody,
      }),
    }),

    // Remember to remove this endpoint
    /* getOrders: builder.query({
    //   query: () => "Orders",
    // }), */

    activateOrDeactivateProduct: builder.query({
      query: () => "ActivateOrDeactivateProduct",
    }),

    activateOrDeactivateProductCategory: builder.query({
      query: () => "ActivateOrDeactivateProductCategory",
    }),

    getCategories: builder.query({
      query: () => "GetCategories",
    }),

    // there is -> ? <- on this endpoint below, it has ID as a
    // parameter...but in the swagger endpoint, he didn't specify
    getCategory: builder.query({
      query: (id) => "GetCategory",
    }),

    getProducts: builder.query({
      query: () => "GetProducts",
    }),

    // also here
    getProduct: builder.query({
      query: () => "GetProduct",
    }),
  }),
});

export const {
  useCreateProductCategoryMutation,
  useCreateProductMutation,
  usePlaceOrderMutation,
  useAddStockMutation,
} = productApi;
