import { socket } from '../../init/socket';
import { uiActions } from '../ui/actions';
import {postsActions} from '../posts/actions';
import {store} from '../../init/store';

export const socketActions = {
	listenConnection: () => dispatch => {
		socket.on('connect', () => {
			dispatch(uiActions.setOnlineState())
		});

		socket.on('disconnect', () => {
			dispatch(uiActions.setOfflineState())
		});
	},
	listenPosts: () => (dispatch, getState) => {
		socket.on('create', event => {
			const {data: post} = JSON.parse(event)
			dispatch(postsActions.createPost(post))
		})

		socket.on('like', event => {
			const {data, meta} = JSON.parse(event)
			const liker = getState().users.find(user => user.get('id') === data.userId).delete('avatar')
			if (meta.action === 'like') {
			   dispatch( postsActions.likePost({postId: data.postId, liker}))
			} else {
				dispatch(postsActions.unlikePost({postId: data.postId, liker}))
			}
		})

		socket.on('remove', event => {
			const { data: postId } = JSON.parse(event)
			dispatch(postsActions.removePost(postId))
		})
	}
}