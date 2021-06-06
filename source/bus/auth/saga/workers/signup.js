import {apply, put} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';
import {api} from '../../../../REST';
import {authActions} from '../../actions';
import {profileActions} from '../../../profile/actions';

export function* signup({payload: userInfo}) {
	try {
		yield put(uiActions.startFetching())
		const response = yield apply(api, api.auth.signup, [userInfo])
		
		const { data : profile, message } = yield apply(response, response.json)
		if (response.status !== 200) {
			throw new Error(message)
		}

		yield put(profileActions.fillProfile(profile))
		yield put(authActions.authenticate())

	} catch (err) {
		console.log('signup worker' , err);
		yield put(uiActions.emitError(err, 'signup worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}