'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import styles from './styles/styles.css';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from './store/configureStore';
import Routes from './routes'

const routes = Routes;
//const store = configureStore();

ReactDOM.render(
    <Router routes={routes}>
        <App />
    </Router>
    , document.getElementById('root')
);