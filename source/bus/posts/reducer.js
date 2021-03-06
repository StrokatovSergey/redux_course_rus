import {fromJS, List} from 'immutable';
import {types} from './types';


const initialState = List()

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FILL_POSTS:
			return fromJS(action.payload)

		case types.CLEAR_POSTS:
			return state.clear()

		case types.CREATE_POST:
			return state.unshift(fromJS(action.payload))

		case types.REMOVE_POST:
			return state.filter(item => item.get('id') !== action.payload)

		case types.LIKE_POST:
			return state.updateIn([state.findIndex(post => post.get('id') === action.payload.postId), 'likes'],
	 likes => likes.push(action.payload.liker))

		case types.UNLIKE_POST:
			return state.updateIn([state.findIndex(post => post.get('id') === action.payload.postId), 'likes'],
	 likes => likes.filter(like => action.payload.liker.get('id') !== like.get('id')))

		default:
			return state
	}
}