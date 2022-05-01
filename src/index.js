import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './App/store/Reducer';
import App from './App/App';
import Auth from './App/auth/Auth';
import * as serviceWorker from './serviceWorker';

const initialState={
    auth: Auth.isAuth(),
    products: false,
    cart: []
}

const store = createStore(Reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

const renderObj = <Provider store={store} ><App/></Provider>;


ReactDOM.render( renderObj , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.register();
