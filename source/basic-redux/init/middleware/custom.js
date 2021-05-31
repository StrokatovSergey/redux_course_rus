export function customThunk(store) {
	return function(next) {
		return function(action) {
			// console.log('action', action, 'store.getState()', store.getState(), 'store', store );
			if (typeof action === 'function') {
			    return  action(store.dispatch, store.getState)
			}
			return next(action)
		}
	}
}