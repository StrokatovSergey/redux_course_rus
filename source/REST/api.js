import {groupId, MAIN_URL} from './config';
import {store} from '../basic-redux/init/store';

const getToken = () => localStorage.getItem('token') || store.getState().profile.toJS().token

export const api = {
	users: {
		fetch() {
			return fetch(`${MAIN_URL}/user/all`, {
				method:  'GET',
				headers: {
					Authorization: getToken()
				}
			})
		}
	},
	auth: {
		authenticate () {
			return fetch(`${MAIN_URL}/user/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({token : getToken()})
			})
		},
		signup (userInfo) {
			return fetch(`${MAIN_URL}/user/${groupId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userInfo)
			})
		},
		login (loginInfo) {
			return fetch(`${MAIN_URL}/user/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(loginInfo)
			})
		},
		logout () {
			return fetch(`${MAIN_URL}/user/logout`, {
				method: 'GET',
				headers: {
					Authorization: getToken()
				}
			})
		}
	},
	posts: {
		fetch () {
			return fetch(`${MAIN_URL}/feed`, {
				method: 'GET',
				headers: {
					Authorization: getToken()
				}
			})
		},
		createPost (postText) {
			return fetch(`${MAIN_URL}/feed`, {
				method: 'POST',
				headers: {
					Authorization: getToken(),
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({comment: postText})
			})
		},
		removePost (postId) {
			return fetch(`${MAIN_URL}/feed/${postId}`, {
				method: 'DELETE',
				headers: {
					Authorization: getToken()
				}
			})
		},
		likeOrUnlike (postId) {
			return fetch(`${MAIN_URL}/feed/like/${postId}`, {
				method: 'PUT',
				headers: {
					Authorization: getToken()
				}
			})
		}
	},

}