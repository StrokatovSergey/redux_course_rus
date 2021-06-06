import {apply, put} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';
import {api} from '../../../../REST';
import {authActions} from '../../actions';
import {profileActions} from '../../../profile/actions';

export function* authenticate() {
	try {
		yield put(uiActions.startFetching())
		const response = yield apply(api, api.auth.authenticate)

		const { data : profile, message } = yield apply(response, response.json)
		if (response.status !== 200) {
			throw new Error(message)
		}

		yield put(profileActions.fillProfile(profile))
		yield put(authActions.authenticate())
		yield apply(localStorage, localStorage.setItem, ['token', profile.token])

	} catch (err) {
		console.log('authenticate worker' , err);
		yield put(uiActions.emitError(err, 'authenticate worker'))
	} finally {
		yield put(uiActions.stopFetching())
		yield put(authActions.initialize())
	}

}