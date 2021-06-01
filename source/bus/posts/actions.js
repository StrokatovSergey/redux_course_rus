import {types} from './types';
import {api} from '../../REST';

export const postsActions = {
	fillPosts : (posts) => ({
		type: types.FILL_POSTS,
		payload: posts
	}),
	createPost : (comment) => ({
		type: types.CREATE_POST,
		payload: comment
	}),
	createPostAsync : (post) => ({
		type: types.CREATE_POST_ASYNC,
		payload: post
	}),
	fetchPostsAsync : () => async (dispatch, getState) => {
		dispatch({
			type: types.FETCH_POSTS_ASYNC
		})
		const responce = await api.posts.fetch()
		const result = await responce.json()

		dispatch(postsActions.fillPosts(result.data))
	}
}