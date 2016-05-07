import React from 'react';
import Navigation from '../navigation/navigation';
import { Link, IndexLink } from 'react-router';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="header">

                <IndexLink to='/' className="logo">
                    <h1 className="logo">
                        bnb<span className="fat-face">OPEN</span>
                    </h1>
                </IndexLink>

                <Navigation />

            </div>
        );
    }
}

Header.propTypes = {};