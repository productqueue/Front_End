import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import {
    authReducer,
    createReducer,
    readReducer,
    updateReducer,
    deleteReducer
} from './reducers';

const rootReducer = combineReducers({
	authReducer: authReducer,
    createReducer: createReducer,
    readReducer: readReducer,
    updateReducer: updateReducer,
    deleteReducer: deleteReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();