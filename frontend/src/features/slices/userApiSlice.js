import apiSlice from "./apislice";
import {USERS_URL} from "../constants";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/signin`,
                method: "POST",
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/signup`,
                method: "POST",
                body: data,
            }),
        }),
    })
})

export const {useLoginMutation, useRegisterMutation} = userApiSlice