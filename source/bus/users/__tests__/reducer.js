import {fromJS, List} from 'immutable';
import {usersReducer} from '../reducer';
import {usersActions} from '../actions';

const initialState = List()

describe('reducer users test', () => {
	it('should return default state', function() {
		expect(usersReducer(void 0, {})).toEqual(initialState)
	});

	it('should handle CLEAR_USERS', function() {
		expect(usersReducer(void 0, usersActions.clearUsers())).toEqual(initialState)
	});

	it('should load users in state', function() {
		expect(usersReducer(void 0, usersActions.fillUsers(__.users))).toEqual(fromJS(__.users))
	});

})