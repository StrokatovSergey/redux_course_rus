import {types} from './types';

export const usersActions = {
	fillUsers: (users) => ({
		type : types.FILL_USERS,
		payload: users
	}),
	clearUsers: () => ({
		type : types.CLEAR_USERS,
	}),
	fetchUsersAsync: () => ({
		type : types.FETCH_USERS_ASYNC,
	})
}