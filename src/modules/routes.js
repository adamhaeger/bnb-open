import React from 'react';
import App from '../App';
import About from '../components/about/about.js';
import Pilot from '../components/pilot/pilot';
import Exhibition from '../components/exhibition/exhibition';
import Home  from '../components/home/home';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/pilot" component={Pilot}/>
        <Route path="/exhibition" component={Exhibition}/>
    </Route>
);
