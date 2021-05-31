import {takeEvery, all, call} from 'redux-saga/effects';

import {CREATE_POST_ASYNC} from '../types';

import {createPost} from './workers/createPost';

export function* watchCreatePost() {
	yield takeEvery(CREATE_POST_ASYNC, createPost)
}

export function* watchPosts() {
	yield all([call(watchCreatePost)])
}