import {api} from '../../../../REST';
import {postsActions} from '../../actions';
import {put, apply} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';

export function* removePost({payload: postId}) {
	try {
		yield put(uiActions.startFetching())

		const response = yield apply(api, api.posts.removePost, [postId])
		if (response.status !== 204) {
			const { message } = yield apply(response, response.json)
			throw new Error(message)
		}
		yield put(postsActions.removePost(postId))

	} catch (err) {
		console.log('deletePost worker' , err);
		yield put(uiActions.emitError(err, 'deletePost worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}