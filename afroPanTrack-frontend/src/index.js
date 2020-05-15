import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../src/redux/userReducer'
import reportReducer from './redux/reportsReducer';

const rootReducer = combineReducers({
    allUserInfo: userReducer,
    allReportInfo: reportReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let storeObj = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))





ReactDOM.render(
    <Router>
        <Provider store = {storeObj}>
            <App />
        </Provider>
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
