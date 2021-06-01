import {api} from '../../../../REST';
import {createPost as createPostAS} from '../../actions';
import {put, apply} from 'redux-saga/effects';

export function* createPost({payload: comment}) {
	const response = yield apply(api, api.posts.createPost, [comment])
	const result = yield apply(response, response.json)
	yield put(createPostAS(result.data))

}