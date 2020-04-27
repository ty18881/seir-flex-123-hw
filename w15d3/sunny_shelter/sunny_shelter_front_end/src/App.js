import React from 'react';
import Popup from "reactjs-popup";

import './App.css';
import NewForm from "./components/NewForm"
import ShowAnimal from './components/ShowAnimal';

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

 
// remove the animal record from the database
// remove the animal from the collection in state as well so it doesn't appear on the screen.
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
        <br></br>
        <table>
          <tbody>
            {this.state.animals.map(animal => (
              <tr key={animal._id}>
                {/* I want the pet's photo to bring up the modal when clicked */}
                {/* <td> <img src={animal.image} alt="the here"/>
                  {animal.name}
                </td> */}
                
                <td> 
                  <Popup modal 
                    
                       trigger={<img src={animal.image} alt="the here"></img> }>
                         {/* {animal.name} */}
                  
                    {close => <ShowAnimal 
                        animal={animal}
                        deleteAnimal={this.deleteAnimal}
                        baseURL={baseURL}
                        />}
                  </Popup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

// trigger={<button>Click to learn more about {animal.name}</button>}>

componentDidMount() {
  this.getAnimals();
}
}

export default App;
