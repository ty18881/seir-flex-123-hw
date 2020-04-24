import React from 'react';

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
  };


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
