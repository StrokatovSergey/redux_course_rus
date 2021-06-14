import {takeEvery, all, call} from 'redux-saga/effects';

import {types} from '../types';
import {updateName} from './workers/updateName';



export function* watchUpdateName() {
	yield takeEvery(types.UPDATE_NAME_ASYNC, updateName)
}

export function* watchProfile() {
	yield all([call(watchUpdateName)])
}