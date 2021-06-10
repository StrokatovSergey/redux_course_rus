import {api} from '../../../../REST';
import {postsActions} from '../../actions';
import {put, apply, select} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';

export function* unlikePost({payload: postId}) {
	try {
		yield put(uiActions.startFetching())

		const response = yield apply(api, api.posts.likeOrUnlike, [postId])
		if (response.status !== 204) {
			const { message } = yield apply(response, response.json)
		    throw new Error(message)
		}

		const liker = yield select(state => state.profile.removeAll(['avatar', 'token']))

		yield put(postsActions.unlikePost({ postId, liker }))

	} catch (err) {
		console.log('unlikePost worker' , err);
		yield put(uiActions.emitError(err, 'unlikePost worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}