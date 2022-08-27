import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://slemtech.com/inventory/",

    credentials: "same-origin",
    prepareHeaders: (headers, { getState }) => {
        const authToken = localStorage.getItem("auth");
        if (authToken) {
            headers.set("authorization", `Bearer ${authToken}`);
            console.log(`found -> ${authToken}`);
        }
        return headers;
    },
});

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: baseQuery,

    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (product) => ({
                url: "CreateProduct",
                method: "POST",
                body: { ...product },
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

        getProduct: builder.query({
            query: (id) => `GetProduct?id=${id}`,
        }),

        getPaymentTypes: builder.query({
            query: () => "GetPaymentTypes",
        }),
    }),
});

export const {
    useAddStockMutation,
    useRemoveStockMutation,
    useGetCategoryQuery,
    useGetPaymentTypesQuery,
    useGetProductQuery,
    useGetCategoriesQuery,
    useGetProductsQuery,
    useCreateProductCategoryMutation,
    useCreateProductMutation,
    usePlaceOrderMutation,
    useUploadResultMutation,
} = productApi;
