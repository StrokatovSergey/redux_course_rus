import {apply, put} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';
import {api} from '../../../../REST';
import {authActions} from '../../actions';
import {profileActions} from '../../../profile/actions';
import {actions} from 'react-redux-form';

export function* login({payload: loginInfo}) {
	try {
		yield put(uiActions.startFetching())
		const response = yield apply(api, api.auth.login, [loginInfo])

		const { data : profile, message } = yield apply(response, response.json)
		if (response.status !== 200) {
			throw new Error(message)
		}

		yield apply(localStorage, localStorage.setItem, ['remember', loginInfo.remember])

		yield put(profileActions.fillProfile(profile))
		yield put(actions.change('forms.user.profile.firstName', profile.firstName))
		yield put(actions.change('forms.user.profile.lastName', profile.lastName))
		yield put(authActions.authenticate())
		yield apply(localStorage, localStorage.setItem, ['token', profile.token])

	} catch (err) {
		console.log('login worker' , err);
		yield put(uiActions.emitError(err, 'login worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}