import {apply, put} from 'redux-saga/effects';
import {uiActions} from '../../../ui/actions';
import {api} from '../../../../REST';
import {usersActions} from '../../actions';

export function* fetchUsers() {
	try {
		yield put(uiActions.startFetching())

		const response = yield apply(api, api.users.fetch)
		const { data : users, message } = yield apply(response, response.json)
		if (response.status !== 200) {
			throw new Error(message)
		}
		
		console.log('usersusers', users);

		yield put(usersActions.fillUsers(users))

	} catch (err) {
		console.log('fetchUsers worker' , err);
		yield put(uiActions.emitError(err, 'fetchUsers worker'))
	} finally {
		yield put(uiActions.stopFetching())
	}

}