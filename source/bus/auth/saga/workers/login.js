import {apply, put} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';
import {api} from '../../../../REST';
import {authActions} from '../../actions';
import {profileActions} from '../../../profile/actions';

export function* login({payload: loginInfo}) {
	try {
		yield put(uiActions.startFetching())
		const response = yield apply(api, api.auth.login, [loginInfo])

		const { data : profile, message } = yield apply(response, response.json)
		if (response.status !== 200) {
			throw new Error(message)
		}

		yield put(profileActions.fillProfile(profile))
		yield put(authActions.authenticate())

	} catch (err) {
		console.log('login worker' , err);
		yield put(uiActions.emitError(err, 'login worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}