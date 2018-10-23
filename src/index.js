import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Router, browserHistory} from 'react-router';
// import { Provider } from 'react-redux';

import './index.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

// import { store } from './app/store/reducers';

ReactDOM.render((
    <Router>
        <App />
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
