import {types} from './types';

export const authAction = {
	authenticate: () => ({
		type : types.AUTHENTICATE
	}),
	signupAsync: (userData) => ({
		types: types.SIGNUP_ASYNC,
		payload: userData
	})
}