import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface User {
	name: string;
	username: string;
}
interface UserResponse extends User {
	token: string;
}
interface LoginRequest {
	username: string;
	password: string;
}
//type UserResponse = User;

const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),

	endpoints: (build) => ({
		login: build.mutation<UserResponse, LoginRequest>({
			query: (credentials) => ({
				url: `account/login`,
				method: 'POST',
				body: credentials,
			}),
		}),
	}),
});

// Auto-generated hooks
export const { useLoginMutation } = api;

// Possible exports
export const { endpoints, reducerPath, reducer, middleware } = api;
// reducerPath, reducer, middleware are only used in store configuration
// endpoints will have:
// endpoints.getPosts.initiate(), endpoints.getPosts.select(), endpoints.getPosts.useQuery()
// endpoints.addPost.initiate(), endpoints.addPost.select(), endpoints.addPost.useMutation()
// see `createApi` overview for _all exports_
