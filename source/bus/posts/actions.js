import {types} from './types';

export const postsActions = {
	fillPosts : (posts) => ({
		type: types.FILL_POSTS,
		payload: posts
	}),
	createPost : (comment) => ({
		type: types.CREATE_POST,
		payload: comment
	}),
	clearPosts : () => ({
		type: types.CLEAR_POSTS,
	}),
	createPostAsync : (post) => ({
		type: types.CREATE_POST_ASYNC,
		payload: post
	}),
	fetchPostsAsync : () => ({
		type: types.FETCH_POSTS_ASYNC
	}),
	clearPostsAsync : () => ({
		type: types.CLEAR_POSTS_ASYNC
	}),
}