import {types} from './types';
import {Map} from 'immutable';

const initialState = Map({
	isAuthenticated: true
})

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.AUTHENTICATE:
			return state.set('isAuthenticated', true);

		default:
			return state
	}
}