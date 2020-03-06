import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import store from "./redux/state";

let renderTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>, document.getElementById('root'));
};
renderTree(store.getState());
store.subscribe(renderTree);
serviceWorker.unregister();