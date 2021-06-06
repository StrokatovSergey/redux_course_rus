import {apply, put} from 'redux-saga/effects';
import {authActions} from '../../actions';

export function* initialize() {
	const token = yield apply(localStorage, localStorage.getItem, ['token'])

	if (token) {
	   yield put(authActions.authenticateAsync())
	} else {
		yield put(authActions.initialize())
	}

}