import React from "react";

class NewForm extends React.Component {
  state = {
    name: "",
    species: "",
    image: "",
    personalityTraits: [],
    buttonLabel: "Add new pet to our gathering"
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(this.props.baseURL + "/animals", {
      method: "POST",
      body: JSON.stringify({ name: this.state.name,
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
        this.props.handleAddAnimal(resJson);
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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="Pet Name"
        />

        <label htmlFor="species"></label>
        <input
          type="text"
          id="species"
          name="species"
          onChange={this.handleChange}
          value={this.state.species}
          placeholder="Species (cat,dog,bird,etc)"
        />

        <label htmlFor="image"></label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
          placeholder="Photo"
        />

        <label htmlFor="personalityTraits"></label>
        <input
          type="text"
          id="personalityTraits"
          name="personalityTraits"
          onChange={this.handleChange}
          value={this.state.personalityTraits}
          placeholder="Personality Traits separated by commas"
        />

        <input type="submit" value={this.props.buttonLabel} />
      </form>
    );
  }
}

export default NewForm;