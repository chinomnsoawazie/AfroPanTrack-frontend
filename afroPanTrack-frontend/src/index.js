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
import viewsReducer from './redux/viewsReducer';
import locationsReducer from './redux/locationsReducer';
import quarantineCentersReducer from './redux/quarantineCentersReducer';
import countryUpdatesReducer from './redux/countryUpdatesReducer';
import factsReducer from './redux/factsReducer';
import helpsReducer from './redux/helpReducer';
import chartsReducer from './redux/chartsReducer';


const rootReducer = combineReducers({
    allUserInfo: userReducer,
    allReportInfo: reportReducer,
    allViewsInfo: viewsReducer,
    allLocationInfo: locationsReducer,
    allQuarantineCenterInfo: quarantineCentersReducer,
    allCountryUpdateInfo: countryUpdatesReducer,
    allFactInfo: factsReducer,
    allHelpInfo: helpsReducer,
    allChartInfo: chartsReducer,
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
