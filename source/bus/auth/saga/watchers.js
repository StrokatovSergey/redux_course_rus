import {takeEvery, all, call} from 'redux-saga/effects';

import {types} from '../types';
import {signup} from './workers/signup';
import {login} from './workers/login';
import {authenticate} from './workers/authenticate';
import {initialize} from './workers/initialize';

function* watchSignup() {
	yield takeEvery(types.SIGNUP_ASYNC, signup)
}

function* watchLogin() {
	yield takeEvery(types.LOGIN_ASYNC, login)
}

function* watchAuthenticate() {
	yield takeEvery(types.AUTHENTICATE_ASYNC, authenticate)
}

function* watchInitialize() {
	yield takeEvery(types.INITIALIZE_ASYNC, initialize)
}

export function* watchAuth() {
	yield all([call(watchSignup), call(watchLogin), call(watchAuthenticate), call(watchInitialize)])
}