import {types} from './types';

export const profileActions = {
	fillProfile: (profile) => ({
		type : types.FILL_PROFILE,
		payload: profile
	}),
	clearProfile: () => ({
		type : types.CLEAR_PROFILE,
	}),
	updateAvatar: (newAvatarUrl) => ({
		type : types.UPDATE_AVATAR,
		payload: newAvatarUrl
	}),


	updateNameAsync: (newName) => ({
		type : types.UPDATE_NAME_ASYNC,
		payload: newName
	}),
	updateAvatarAsync: (newAvatarUrl) => ({
		type : types.UPDATE_AVATAR_ASYNC,
		payload: newAvatarUrl
	}),
	updatePasswordAsync: (passwordData) => ({
		type : types.UPDATE_PASSWORD_ASYNC,
		payload: passwordData
	}),
}