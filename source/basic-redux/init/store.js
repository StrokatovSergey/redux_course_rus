import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {rootReducer} from './rootReducer';
import thunk from 'redux-thunk';
import {enhancedStore} from './middleware/core';



export const store =  createStore(rootReducer, enhancedStore)
