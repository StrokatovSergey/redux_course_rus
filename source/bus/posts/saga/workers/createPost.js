import {api} from '../../../../REST';
import {postsActions} from '../../actions';
import {put, apply} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';

export function* createPost({payload: comment}) {
	try {
		yield put(uiActions.startFetching())

		const response = yield apply(api, api.posts.createPost, [comment])
		const { data : post, message } = yield apply(response, response.json)
		if (response.status !== 200) {
		    throw new Error(message)
		}
		yield put(postsActions.createPost(post))

	} catch (err) {
		console.log('createPost worker' , err);
		yield put(uiActions.emitError(err, 'createPost worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}