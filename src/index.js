import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import styles from './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { InitialState }  from './components/App/initialState'

const store = configureStore(InitialState);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);