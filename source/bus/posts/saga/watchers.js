import {takeEvery, all, call} from 'redux-saga/effects';

import {types} from '../types';

import {createPost} from './workers/createPost';
import {fetchPosts} from './workers/fetchPosts';
import {removePost} from './workers/removePost';
import {likePost} from './workers/likePost';
import {unlikePost} from './workers/unlikePost';

export function* watchCreatePost() {
	yield takeEvery(types.CREATE_POST_ASYNC, createPost)
}

export function* watchFetchPosts() {
	yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts)
}

export function* watchRemovePost() {
	yield takeEvery(types.REMOVE_POST_ASYNC, removePost)
}
export function* watchLikePost() {
	yield takeEvery(types.LIKE_POST_ASYNC, likePost)
}

export function* watchUnlikePost() {
	yield takeEvery(types.UNLIKE_POST_ASYNC, unlikePost)
}

export function* watchPosts() {
	yield all([
		call(watchCreatePost), call(watchFetchPosts), call(watchRemovePost), call(watchLikePost),
		call(watchUnlikePost)])
}