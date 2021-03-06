import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import sideBarReducer from './store/reducers/sidebar';
import searchReducer from './store/reducers/search';

const rootReducer = combineReducers({
    sideBar:sideBarReducer,
    search:searchReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store = {store}><App /></ Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
