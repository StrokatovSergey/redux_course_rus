import {groupId, MAIN_URL} from './config';

export const api = {
	get token () {
		return localStorage.getItem('token')
	},
	auth: {
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
					Authorization: this.token
				}
			})
		},
		authenticate () {
			return fetch(`${MAIN_URL}/user/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({token : this.token})
			})
		}
	},
	posts: {
		fetch () {
			return fetch(`${MAIN_URL}/feed`, {
				method: 'GET',
				headers: {
					Authorization: this.token
				}
			})
		},
		createPost (postText) {
			return fetch(`${MAIN_URL}/feed`, {
				method: 'POST',
				headers: {
					Authorization: this.token,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({comment: postText})
			})
		},
		removePost (postId) {
			return fetch(`${MAIN_URL}/feed/${postId}`, {
				method: 'DELETE',
				headers: {
					Authorization: this.token
				}
			})
		},
		like (postId) {
			return fetch(`${MAIN_URL}/feed/like/${postId}`, {
				method: 'PUT',
				headers: {
					Authorization: this.token
				}
			})
		}
	}
}