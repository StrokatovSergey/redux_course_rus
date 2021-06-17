import {authActions} from '../actions';
import {types} from '../types';

	describe('auth actions', () => {
		it('should authenticate', function() {
			expect(authActions.authenticate()).toEqual({
				type: types.AUTHENTICATE
			})
		});

		it('should initialize', function() {
			expect(authActions.initialize()).toEqual({
				type: types.INITIALIZE
			})
		});

		it('should logout', function() {
			expect(authActions.logout()).toEqual({
				type: types.LOGOUT
			})
		});

		it('should signupAsync', function() {
			expect(authActions.signupAsync(__.userProfile)).toEqual({
				type: types.SIGNUP_ASYNC,
				payload: __.userProfile
			})

		});

		it('should loginAsync', function() {
			expect(authActions.loginAsync(__.credentials)).toEqual({
				type: types.LOGIN_ASYNC,
				payload: __.credentials
			})
		});

		it('should authenticateAsync', function() {
			expect(authActions.authenticateAsync()).toEqual({
				type: types.AUTHENTICATE_ASYNC
			})
		});

		it('should initializeAsync', function() {
			expect(authActions.initializeAsync()).toEqual({
				type: types.INITIALIZE_ASYNC
			})
		});

		it('should logoutAsync', function() {
			expect(authActions.logoutAsync()).toEqual({
				type: types.LOGOUT_ASYNC
			});
		})

	})