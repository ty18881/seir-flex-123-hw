import React from 'react';
import Popup from "reactjs-popup";

import './App.css';
import NewForm from "./components/NewForm"
import ShowAnimal from './components/ShowAnimal';
// components to support authentication

import SignIn from "./components/SignIn.js"
import SignUp from "./components/SignUp.js"

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

  // refresh the animal's record in state when changes are made in
  // UpdateForm component.
  handleUpdateAnimal = (animal, id) => {
    console.log("Handle Update Animal - congrats! you got to the callback!");
    const findIndex = this.state.animals.findIndex(animal => animal._id === id)
    const copyAnimals = [...this.state.animals]
    // splice:  replace item at findIndex, replace a single item, put animal in the old item's place
    copyAnimals.splice(findIndex, 1, animal)
    this.setState({animals: copyAnimals})

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


  // authentication specific methods.
  handleSignUp = (username, password) => {
    console.log(username, password);
    fetch(baseURL + "/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        this.setState({
          currentUser: resJson.username,
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  handleSignIn = (username, password) => {
    // console.log(username, password);
    fetch(baseURL + "/sessions", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJson) => {
        // console.log(resJson);
        this.setState({
          currentUser: resJson.username,
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  
  // Destroy session when user logs out
  // also remove username from state.

  handleLogout = () => {

    this.setState({
      currentUser: ""
    })
    // fetch(baseURL + "/sessions", {
    //   method: "DELETE",
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((resJson) => {
    //     console.log(resJson);
    //     this.setState({
    //       currentUser: "",
    //     });
    //   })
    //   .catch((error) => console.error({ Error: error }));

  }
  render () {
  return (
    <div className="container">
        <h1>Sunny Philadelphia Shelter Website</h1>
        {/* Only display the above header if the user isn't logged in. */}
        
        {this.state.currentUser ? (
        <>
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
                    
                       trigger={<img className="petimage" src={animal.image} alt="the here"></img> }>
                         {/* {animal.name} */}
                         {/* <div className="petname">
                           {animal.name}
                         </div> */}
                  
                    {close => <ShowAnimal 
                        animal={animal}
                        deleteAnimal={this.deleteAnimal}
                        baseURL={baseURL}
                        handleUpdateAnimal={this.handleUpdateAnimal}
                        />}
                  </Popup>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="logout" onClick={this.handleLogout}>Logout</button>
        </>

        ) : (
          <>
              <SignIn handleSignIn={this.handleSignIn} />
              <SignUp handleSignUp={this.handleSignUp} />
          </>
        )}
        
      </div>
      
  );
}


  componentDidMount() {
    this.getAnimals();
  }
}

export default App;
