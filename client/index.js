'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import styles from './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { InitialState }  from './components/App/initialState'

// const store = configureStore(InitialState);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);