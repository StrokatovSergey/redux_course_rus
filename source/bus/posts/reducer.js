import {fromJS, List} from 'immutable';
import {CREATE_POST, FILL_POSTS} from './types';


const initialState = List()

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FILL_POSTS:
			return fromJS(action.payload)

		case CREATE_POST:
			return state.unshift(fromJS(action.payload))

		default:
			return state
	}
}