/**
 * Created by kevin gosse on 04/12/2015.
 */
require('babel-core/polyfill');
require('./styles/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import Dashboard from './components/Dashboard.jsx';
import Orders from './components/Orders.jsx';
import createBrowserHistory from 'history/lib/createBrowserHistory';

ReactDOM.render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Orders}/>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="orders" component={Orders}/>
        </Route>
    </Router>
), document.querySelector('#app'));
