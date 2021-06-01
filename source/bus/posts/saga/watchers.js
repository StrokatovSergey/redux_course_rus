import {takeEvery, all, call} from 'redux-saga/effects';

import {types} from '../types';

import {createPost} from './workers/createPost';

export function* watchCreatePost() {
	yield takeEvery(types.CREATE_POST_ASYNC, createPost)
}

export function* watchPosts() {
	yield all([call(watchCreatePost)])
}