import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <h1>Welcome to openTransformation!</h1>
            </div>
        );
    }
}

Home.propTypes = {};