import React from 'react';

export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('yo im about!');
    }

    render() {
        return(
            <div>
                <h3>Hey Im about!</h3>
            </div>
        );
    }
}

About.propTypes = {};