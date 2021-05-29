import {CREATE_POST_ASYNC, FETCH_POSTS_ASYNC, FILL_POSTS} from './types';
import {api} from '../../REST';

export const fillPosts = (posts) => ({
	type: FILL_POSTS,
	payload: posts
})

export const createPostAsync = (post) => async (dispatch, geState) => {
	api.posts.createPost(post)
		.then(() => {
			dispatch({
				type: CREATE_POST_ASYNC,
				payload: post
			})
		})
		.catch((err) => console.log('err', err))
}

export const fetchPostsAsync = () => async (dispatch, getState) => {
	dispatch({
		type: FETCH_POSTS_ASYNC
	})

	const responce = await api.posts.fetch()
	const result = await responce.json()

	dispatch(fillPosts(result.data))
}