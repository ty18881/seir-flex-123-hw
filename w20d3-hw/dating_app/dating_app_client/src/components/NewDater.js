import React, { Component } from "react";


class NewDater extends Component {

    // update state as values are entered in the form.

    handleInputChange = (event) => {
        console.log("NEW DATER - Handling Input")
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;

        this.setState({
            [event.target.id]: event.target.value
        });
    }

// submit form data to the database.
// OPEN QUESTION:  how to I enumerate through
// the state variables?  versus calling them by name below...
// also clear the form data once the submit has happened
    handleSubmit = (event) => {
console.log("HANDLE SUBMIT - ", event);
console.log("HANDLE SUBMIT - Base URL", this.props.baseURL)
        event.preventDefault();
        let localLtl = false;

        if (this.state.ltl === "y" || this.state.ltl === "Y"){
            localLtl = true;
        }

        fetch(this.props.baseURL, {
            method: "POST",
            body: JSON.stringify({
                name: this.state.name,
                image: this.state.image,
                starsign: this.state.starsign,
                age: this.state.age,
                ltl: localLtl
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(resJson => {
            console.log("HANDLE SUBMIT - attempting to clear the form")
            console.log(resJson);
            this.setState({
                name: "",
                image: "",
                starsign: "",
                age: "",
                ltl: ""
            })
        })
        .catch(error => console.error({ Error: error}));

    };


    render () {
       return (
         <>

         <form onSubmit={this.handleSubmit}>
            <label htmlFor="name"></label>
            <input 
                type="text"
                id="name"
                name="name"
                onChange={this.handleInputChange}
                placeholder="Dater Name"
            />
            <label htmlFor="image"></label>
            <input 
                type="text"
                id="image"
                name="image"
                onChange={this.handleInputChange}
                placeholder="Link to your photo"
            />

            <label htmlFor="starsign"></label>
            <input 
                type="text"
                id="starsign"
                name="starsign"
                onChange={this.handleInputChange}
                placeholder="What's your sign?"
            />

            <label htmlFor="age"></label>
            <input 
                type="text"
                id="age"
                name="age"
                onChange={this.handleInputChange}
                placeholder="How old are you?"
            />
            <label htmlFor="ltl"></label>
            <input 
                type="text"
                id="ltl"
                name="ltl"
                onChange={this.handleInputChange}
                placeholder="You like to laugh? Y/N"
            />

            <button className="addbutton" value="submit">Submit</button>
         </form>

         </>
       )
     }
}

export default NewDater;