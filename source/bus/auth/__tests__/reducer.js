import {Map} from 'immutable';
import {authReducer} from '../reducer';
import {types} from '../types';
import {authActions} from '../actions';

const initialState = Map({
	isAuthenticated: false,
	isInitialized: false
})

describe('auth reducer', () => {
	it('should return initial state by default', function() {
		expect(authReducer(void 0, {})).toEqual(initialState)
	});

	it('should handle INITIALIZE action', function() {
		expect(authReducer(void 0, authActions.initialize())).toEqual(initialState.set('isInitialized', true))
	});

	it('should handle AUTHENTICATE action', function() {
		expect(authReducer(void 0, authActions.authenticate())).toEqual(initialState.set('isAuthenticated', true))
	});

	it('should action LOGOUT return value', function() {
		expect(authReducer(void 0,  authActions.logout())).toEqual(initialState.set('isAuthenticated', false))
	});

})