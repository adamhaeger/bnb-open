import React from 'react';
import NavLink from '../ui/nav-link/nav-link';

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    
    render() {
        return(
            <ul className="Navigation">
                <li><NavLink to='/about'>Om Oss</NavLink></li>
                <li><NavLink to='/pilot'>Piloten</NavLink></li>
                <li><NavLink to='/exhibition'>Utstilling</NavLink></li>
            </ul>
        );
    }
}

Navigation.propTypes = {};


// "scripts": {
//     "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
//         "start:dev": "webpack-dev-server --inline --content-base public/ --history-api-fallback",
//         "start:prod": "npm run build && node server.bundle.js",
//         "build:client": "webpack",
//         "build:server": "webpack --config webpack.server.config.js",
//         "build": "npm run build:client && npm run build:server"
// },