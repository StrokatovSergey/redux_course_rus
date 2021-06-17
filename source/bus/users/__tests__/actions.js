
import {usersActions} from '../actions';
import {types} from '../types';

describe('actions users', () => {
	it('should fillUsers return FILL_USERS', function() {
		expect(usersActions.fillUsers()).toEqual({type: types.FILL_USERS})
	});

	it('should fillUsers return clearUsers', function() {
		expect(usersActions.clearUsers()).toEqual({type: types.CLEAR_USERS})
	});
	it('should fillUsers return fetchUsersAsync', function() {
		expect(usersActions.fetchUsersAsync()).toEqual({type: types.FETCH_USERS_ASYNC})
	});

})