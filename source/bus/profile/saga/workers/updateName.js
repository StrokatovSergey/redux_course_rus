import {apply, put} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';
import {api} from '../../../../REST';
import {profileActions} from '../../actions';

export function* updateName({ payload: {firstName, lastName}}) {
	try {
		yield put(uiActions.startFetching())

		const response = yield apply(api, api.profile.updateProfile, [{firstName, lastName}])
		const { data : updatedProfile, message } = yield apply(response, response.json)
		if (response.status !== 200) {
			throw new Error(message)
		}

		yield put(profileActions.fillProfile(updatedProfile))

	} catch (err) {
		console.log('updateName worker' , err);
		yield put(uiActions.emitError(err, 'updateName worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}