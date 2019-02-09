import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';


import './index.scss';
// import App from './app/App';
import SmartApp from './app/containers/SmartApp/SmartApp';

import * as serviceWorker from './serviceWorker';

import { store } from './app/store/reducers';

library.add(faIgloo)

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <SmartApp />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
