/**
 * Created by kevin gosse on 04/12/2015.
 */
require('babel-core/polyfill');
require('./styles/main.scss');
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';

ReactDom.render(<App />, document.querySelector("#app"));

