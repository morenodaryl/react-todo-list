import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { notesReducer } from './reducers/notesReducer'

export const store = createStore(combineReducers({notesReducer}), {}, applyMiddleware(logger) );