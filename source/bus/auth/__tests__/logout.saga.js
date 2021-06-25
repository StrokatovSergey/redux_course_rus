import {logout} from '../saga/workers/logout';
import {api} from '../../../REST';
import {apply, put} from 'redux-saga/effects';
import {expectSaga} from 'redux-saga-test-plan';
import {postsActions} from '../../posts/actions';
import {usersActions} from '../../users/actions';
import {profileActions} from '../../profile/actions';
import {uiActions} from '../../ui/actions';
import {actions} from 'react-redux-form';
import {authActions} from '../actions';
import {replace} from 'react-router-redux';
import {book} from '../../../navigation/book';


describe('logout saga test', () => {
	it('should success 204 response', async () => {
		await expectSaga(logout)
			.provide([[apply(api, api.auth.authenticate), __.fetchResponseSuccess204]])
			.apply(localStorage, localStorage.removeItem, ['token'])
			.apply(localStorage, localStorage.removeItem, ['remember'])
			.put(postsActions.clearPosts())
			.put(usersActions.clearUsers())
			.put(profileActions.clearProfile())
			.put(uiActions.stopFetching())
			.put(actions.reset('forms.user'))
			.put(authActions.logout())
			.put(replace(book.login))
	});

	it('should NOT 204 response', async () => {
		await expectSaga(logout)
			.provide([[apply(api, api.auth.authenticate), __.fetchResponseSuccess]])
			.put(uiActions.emitError(__.error, 'logout worker'))
			.apply(localStorage, localStorage.removeItem, ['token'])
			.apply(localStorage, localStorage.removeItem, ['remember'])
			.put(postsActions.clearPosts())
			.put(usersActions.clearUsers())
			.put(profileActions.clearProfile())
			.put(uiActions.stopFetching())
			.put(actions.reset('forms.user'))
			.put(authActions.logout())
			.put(replace(book.login))
	});
})