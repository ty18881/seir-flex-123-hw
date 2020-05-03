import React, { Component } from "react";

class Daters extends Component {

    // add method to collect Daters from our database

    getDaters = () => {
        fetch("http://localhost:3000/users")
        .then( daters => console.log(daters))
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