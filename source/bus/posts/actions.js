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
	fetchPostsAsync : () => ({
		type: types.FETCH_POSTS_ASYNC
	})
}