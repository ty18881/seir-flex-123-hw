import React from "react";

// This is the "brute force" method.
// create a separate component - very similar to the NewForm 
// that can capture updates and save them to the datastore.
// ShowAnimal will send down the following prosp:
//  1. animal object
//  2. baseURL
//  3. handleUpdateAnimal - callback function to update the animal's object in the application state

class UpdateForm extends React.Component {
  state = {
    name: this.props.animal.name,
    species: this.props.animal.species,
    image: this.props.animal.image,
    personalityTraits: this.props.animal.personalityTraits,
    buttonLabel: `Update ${this.props.animal}'s Record`
    
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };



// this will update the animal's record in our database.

  handleUpdate = event => {
    event.preventDefault();
    fetch(`${this.props.baseURL}/animals/${this.props.animal._id}`, {
      method: "PUT",
      body: JSON.stringify({ 
        name: this.state.name,
        species: this.state.species,
        image: this.state.image,
        personalityTraits: this.state.personalityTraits
    }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resJson => {
        this.props.handleUpdateAnimal(resJson, this.props.animal._id);
        this.setState({
          name: "",
          species: "",
          image: "",
          personalityTraits: []
        });
      })
      .catch(error => console.error({ Error: error }));
  };

  render() {
    return (
        <>
        <div className="photo">
            <h1>Modify {this.props.animal.name}'s Record</h1>
            <img src={this.props.animal.image} alt={this.props.animal.name} />
        </div>
      <form onSubmit={this.handleUpdate}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder={this.props.animal.name}
        />

        <label htmlFor="species"></label>
        <input
          type="text"
          id="species"
          name="species"
          onChange={this.handleChange}
          value={this.state.species}
          placeholder={this.props.animal.species}
        />

        <label htmlFor="image"></label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
          placeholder={this.props.animal.image}
        />

        <label htmlFor="personalityTraits"></label>
        <input
          type="text"
          id="personalityTraits"
          name="personalityTraits"
          onChange={this.handleChange}
          value={this.state.personalityTraits}
          placeholder={this.props.animal.personalityTraits}
        />

        <input type="submit" value={this.state.buttonValue} />
      </form>
      </>
    );
  }
}

export default UpdateForm;