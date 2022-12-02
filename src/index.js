import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux stuff import
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//router stuff import
import { BrowserRouter } from 'react-router-dom'

// redux stuff boilerplate

const feelings = (state = '', action) => {
    return state
}

const store = createStore(combineReducers({
    feelings,
}), applyMiddleware(logger))


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
