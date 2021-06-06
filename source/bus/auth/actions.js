import {types} from './types';

export const authActions = {
	initialize: () => ({
		type : types.INITIALIZE
	}),
	authenticate: () => ({
		type : types.AUTHENTICATE
	}),
	signupAsync: userData => ({
		type: types.SIGNUP_ASYNC,
		payload: userData
	}),
	loginAsync: loginData => ({
		type: types.LOGIN_ASYNC,
		payload: loginData
	}),
	authenticateAsync: () => ({
		type : types.AUTHENTICATE_ASYNC
	}),
	initializeAsync: () => ({
		type : types.INITIALIZE_ASYNC
	}),
}