import React from 'react';
import logo from './logo.svg';
import './App.css';

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

  render () {
  return (
    <div className="container">
        <h1>Sunny Philadelphia Shelter Website</h1>
        <table>
          <tbody>
            {this.state.animals.map(animal => (
              <tr key={animal._id}>
                <td> {animal.name}</td>
                <td> {animal.species}</td>
                <td> <img src={animal.image} /></td>
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
