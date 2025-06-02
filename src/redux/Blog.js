import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath :'postApi',
    baseQuery : fetchBaseQuery({
        baseUrl :   'https://zebra-salon-contact-api.onrender.com/'
    }),
    tagTypes: ['post'],
    endpoints : (builder)=>({
        addPost : builder.mutation({
            query: (post)=>({
                url:'/api/v1/Contact',
                method: 'POST',
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
                body: post,
            }),
            invalidatesTags:['post'],
        })
    })
})

export const {useAddPostMutation}  = postApi;