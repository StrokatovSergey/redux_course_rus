import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {rootReducer} from './rootReducer';
import thunk from 'redux-thunk';
import {enhancedStore, sagaMiddleware} from './middleware/core';
import {rootSaga} from './rootSaga';


export const store =  createStore(rootReducer, enhancedStore)

sagaMiddleware.run(rootSaga)