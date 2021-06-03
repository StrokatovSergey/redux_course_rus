import {apply, put} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';
import {api} from '../../../../REST';

export function* worker() {
	try {
		yield put(uiActions.startFetching())

		const response = yield apply(api, api)
		const { data : post, message } = yield apply(response, response.json)
		if (response.status !== 200) {
			throw new Error(message)
		}

	} catch (err) {
		console.log('createPost worker' , err);
		yield put(uiActions.emitError(err, 'createPost worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}