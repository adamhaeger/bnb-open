import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './modules/routes'
require("./styles/style.scss");



ReactDOM.render((
    <Router history={browserHistory} routes={routes} />
), document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'));
