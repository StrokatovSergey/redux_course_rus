import {api} from '../../../../REST';
import {postsActions} from '../../actions';
import {put, apply} from 'redux-saga/effects';

export function* createPost({payload: comment}) {
	try {
		const response = yield apply(api, api.posts.createPost, [comment])
		const { data : post, message } = yield apply(response, response.json)
		
		if (response.status !== 200) {
		    throw new Error(message)
		}
		
		yield put(postsActions.createPost(post))
	} catch (e) {
		console.log('createPost worker' , e);
	}

}