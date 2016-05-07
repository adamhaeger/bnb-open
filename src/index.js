import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/about/about.js';
import Pilot from './components/pilot/pilot';
import Exhibition from './components/exhibition/exhibition';
import Home  from './components/home/home';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
require("./styles/style.scss");

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/pilot" component={Pilot}/>
            <Route path="/exhibition" component={Exhibition}/>
        </Route>
    </Router>
), document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'));
