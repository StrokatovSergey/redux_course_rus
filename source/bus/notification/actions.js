import {types} from './types';
import {v4} from 'uuid';

export const notificationActions = {
	showNotification: (message, type = 'info', source) => ({
		type : types.SHOW_NOTIFICATION,
		payload: {message, type, source, id: v4() }
	}),
	hideNotification: () => ({
		type : types.HIDE_NOTIFICATION
	})
}