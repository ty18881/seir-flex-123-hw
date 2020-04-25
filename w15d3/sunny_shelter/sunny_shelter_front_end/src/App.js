import React from 'react';
import Popup from "reactjs-popup";

import './App.css';
import NewForm from "./components/NewForm"

let baseURL = "http://localhost:3003"

class App extends React.Component {

  state = {
    animals: []
  };

  getAnimals = () => {
      fetch( baseURL +"/animals")
      .then(
        data => {
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        parsedData => this.setState({
          animals: parsedData 
        }),
        err => console.log(err)
      )
  }

  handleAddAnimal = animal => {
    const copyAnimals = [...this.state.animals];
    copyAnimals.unshift(animal);
    this.setState({
      animals: copyAnimals,
      name: ""
    });
    console.log("Handled add animal - is this running upon start up?")
  };

  toggleAdoptionFlag = input => {
    console.log("Toggle Adoption Flag - CLICKED");
    if (input.adopted == true){
      input.adopted = false;
      
    } else
    {
      input.adopted = true;
    }
    console.log("Toggle Adoption Flag -" + input.adopted)
  };

  deleteAnimal = (id) => {
    fetch(baseURL + '/animals/' + id, {
      method: 'DELETE'
    }).then( response => {
      const findIndex = this.state.animals.findIndex(animal => animal._id === id)
      const copyAnimals = [...this.state.animals]
      copyAnimals.splice(findIndex, 1)
      this.setState({animals: copyAnimals})
    })
  }

  render () {
  return (
    <div className="container">
        <h1>Sunny Philadelphia Shelter Website</h1>
        <NewForm baseURL={baseURL} handleAddAnimal={this.handleAddAnimal} />
        <table>
          <tbody>
            {this.state.animals.map(animal => (
              <tr key={animal._id}>
                <td> {animal.name}</td>
                <td> {animal.species}</td>
                <td> <img src={animal.image} alt="Pet Photo"/></td>
                <td> {animal.personalityTraits}</td>
                <td>Adopted? = {animal.adopted == null ? "No": "yes"}</td>
                <td><button type="button" onClick={() => this.toggleAdoptionFlag(animal)}>Pending Adoption</button></td>
                <td><button type="button" onClick={() => this.deleteAnimal(animal._id)}>Officially Adopted!</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

componentDidMount() {
  this.getAnimals();
}
}

export default App;
