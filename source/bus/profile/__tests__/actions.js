
import {profileActions, usersActions} from '../actions';
import {types} from '../types';
import {Map} from 'immutable';

const initialState = Map({
	id: '',
	firstName: '',
	lastName: '',
	avatar: '',
	token: ''
})

describe('actions profile', () => {

	it('should fillProfile snapshot', function() {
		expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot()
	});

	it('should udpateAvatar snapshot', function() {
		expect(profileActions.updateAvatar(__.url)).toMatchSnapshot()
	});

	it('should clearProfile snapshot', function() {
		expect(profileActions.clearProfile()).toMatchSnapshot()
	});

	it('should updateAvatarAsync snapshot', function() {
		expect(profileActions.updateAvatarAsync(__.newAvatar)).toMatchSnapshot()
	});

	it('should updateNameAsync snapshot', function() {
		expect(profileActions.updateNameAsync(__.newName)).toMatchSnapshot()
	});

	it('should updatePasswordAsync snapshot', function() {
		expect(profileActions.updatePasswordAsync({
			oldPassword: __.password.oldPassword,
			newPassword: __.password.newPassword,
		})).toMatchSnapshot()
	});

})


