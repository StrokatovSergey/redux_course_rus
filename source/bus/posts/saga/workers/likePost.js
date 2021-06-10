import {api} from '../../../../REST';
import {postsActions} from '../../actions';
import {put, apply, select} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';

export function* likePost({payload: postId}) {
	try {
		yield put(uiActions.startFetching())

		const response = yield apply(api, api.posts.like, [postId])
		if (response.status !== 204) {
			const { message } = yield apply(response, response.json)
		    throw new Error(message)
		}

		const liker = yield select(state => state.profile.removeAll(['avatar', 'token']))

		yield put(postsActions.likePost({ postId, liker }))

	} catch (err) {
		console.log('likePost worker' , err);
		yield put(uiActions.emitError(err, 'likePost worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}