import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./Style/main.scss";
import {createStore} from 'redux';
import rootReducer from './Reducer/rootReducer';
import {Provider} from 'react-redux';


import data from './data';
if(!localStorage.getItem("dataToDoList")) {
    localStorage.setItem("dataToDoList", JSON.stringify(data));
}

//Create Store
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
