import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {rootReducer} from './rootReducer';

const logger = createLogger({
	duration: true,
	collapsed: true,
	colors : {
		title: () => '#139BFE',
		prevState: () => '#1C5FAF',
		action: () => '#149945',
		nextState: () => '#A47104',
		error: () => '#ff0005',
	}
})
const preloadedState = JSON.parse(localStorage.getItem('gallery')) || false
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composerEnhancers = devtools ? devtools : compose

export const store = preloadedState ?
	createStore(rootReducer, preloadedState, composerEnhancers(applyMiddleware(logger)))
	: createStore(rootReducer, composerEnhancers(applyMiddleware(logger)))

store.subscribe(() => {
	const state = store.getState()
	localStorage.setItem('gallery', JSON.stringify(state))
})