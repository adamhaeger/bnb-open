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