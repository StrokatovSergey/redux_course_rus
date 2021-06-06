import {takeEvery, all, call} from 'redux-saga/effects';

import {types} from '../types';
import {signup} from './workers/signup';



function* watchSignup() {
	yield takeEvery(types.SIGNUP_ASYNC, signup)
}

export function* watchAuth() {
	yield all([call(watchSignup)])
}