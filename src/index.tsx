import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import RootReducer from './root-reducer';
import RootSagas from './root-sagas';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {composeWithDevTools} from 'redux-devtools-extension';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(
    RootReducer,
    composedEnhancers
)
sagaMiddleware.run(RootSagas);
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
