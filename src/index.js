import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import store from "./redux/redux-store";
import {Provider} from "react-redux";

let renderTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
};
renderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderTree(state);
})
serviceWorker.unregister();