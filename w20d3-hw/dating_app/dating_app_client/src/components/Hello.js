import React, { Component } from "react";

class Daters extends Component {

    // hold daters in state
    state = {
        daters: []
    }

    // add method to collect Daters from our database
    // and store the collection in state

    getDaters = () => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then( jDaters => this.setState({ daters: jDaters}))
        .catch( error => console.log(error))
    };

    componentDidMount() {
        this.getDaters();
    }

    render () {
        return (
            <h1>Hello Dating World!</h1>
        )
    }
}

export default Daters;