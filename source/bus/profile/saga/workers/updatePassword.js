import {apply, put, select} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';
import {api} from '../../../../REST';
import {notificationActions} from '../../../notification/actions';

export function* updatePassword({ payload: { newPassword, oldPassword }}) {
	const profile = yield select(state => state.profile.merge({ newPassword, oldPassword }))
	try {
		yield put(uiActions.startFetching())

		const response = yield apply(api, api.profile.updateProfile, [profile])
		const { data , message } = yield apply(response, response.json)
		if (response.status !== 200) {
			throw new Error(message)
		}

		yield put(notificationActions.showNotification('Password changed successfully' ))

	} catch (err) {
		console.log('updatePassword worker' , err);
		yield put(uiActions.emitError(err, 'updatePassword worker'))
		yield put(notificationActions.showNotification('wrong password', 'error', 'change password' ))

	} finally {
		yield put(uiActions.stopFetching())
	}

}