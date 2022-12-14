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

// 

const feeling = (state = '', action) => {
    if (action.type === "SET_FEELING") return action.payload
    return state
}
const understanding = (state = '', action) => {
    if (action.type === "SET_UNDERSTANDING") return action.payload
    return state
}
const support = (state = '', action) => {
    if (action.type === "SET_SUPPORT") return action.payload
    return state
}
const comments = (state = '', action) => {
    if (action.type === "SET_COMMENTS") return action.payload
    return state
}

const store = createStore(combineReducers({
    feeling, understanding, support, comments
}), applyMiddleware(logger))


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
