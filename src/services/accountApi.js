import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://slemtech.com/inventory/swagger/index.html

const baseQuery = fetchBaseQuery({
  baseUrl: "https://slemtech.com/inventory/api/",

  // when you change the -> include <- to some other option will work
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.accessToken;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      console.log(token);
    } else {
      console.log("no token found");
    }
    return headers;
  },
});

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: baseQuery,
  tagTypes: ["account"],

  endpoints: (builder) => ({
    createAccount: builder.mutation({
      query: (newUserCridentials) => ({
        url: "Account/Create",
        method: "POST",
        body: newUserCridentials,
      }),
      invalidatesTags: ["account"],
    }),

    login: builder.mutation({
      query: (userLoginCridentials) => ({
        url: "Account/Login",
        method: "POST",
        body: userLoginCridentials,
      }),
    }),

    createContactRequest: builder.mutation({
      query: (newUserCridentials) => ({
        url: "Account/CreateContactRequest",
        method: "POST",
        body: newUserCridentials,
      }),
    }),

    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `accounts/${id}`,
        method: "DELETE",
      }),
      // ?
      invalidatesTags: ["account"],
    }),

    updateAccount: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `accounts/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["account"],
    }),

    getAccounts: builder.query({
      query: () => "Account",
      providesTags: ["account"],
    }),

    getAccount: builder.mutation({
      query: () => ({
        url: "Account",
        method: "POST",
      }),
    }),

    getAccount: builder.query({
      query: (id) => `accounts/${id}`,
    }),

    getAllStaff: builder.query({
      query: () => "Account/GetAllStaff",
    }),

    getAllCustomers: builder.query({
      query: () => "Account/GetAllCustomers",
    }),

    getAllUsers: builder.query({
      query: () => "Account/GetAllUsers",
    }),
  }),
});

export const {
  useGetAccountQuery,
  useGetUserQuery,
  useGetAllUsersQuery,
  useGetAccountsQuery,
  useGetAllStaffQuery,
  useCreateAccountMutation,
  useLoginMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = accountApi;
