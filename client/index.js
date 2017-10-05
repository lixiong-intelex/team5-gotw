'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { HashRouter, Link, Switch, Route } from 'react-router-dom'
import styles from './styles/styles.css';

ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>), 
document.getElementById('root'));