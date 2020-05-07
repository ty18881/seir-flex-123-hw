import React, { Component } from 'react';

import './App.css';
import Daters from "./components/Hello.js"
import NewDater from "./components/NewDater.js"

const baseURL = "http://localhost:3000/users";
class App extends Component {

  // hold daters in state
  state = {
    daters: []
  }

  // I wired this up so it returns maximum of six daters in each DB call
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
    <div className="App">
      <div className="HolyGrail">
        <header><h1>Welcome to the Dating Game!</h1></header>
        <div className="HolyGrail-body"> 


            <main className="HolyGrail-content"><h2>The Big Open Space in the Center</h2></main>
            <nav className="HolyGrail-nav">
              <Daters 
                daters={this.state.daters.splice(0,3)}
                />
            </nav>
            <aside className="HolyGrail-ads">
              <Daters 
              daters={this.state.daters.splice(0,3)}
              />
            </aside>
          </div>

        <footer><h2>JOIN OUR DATING POOL!</h2>
          <NewDater baseURL={baseURL}/>
        </footer>

      </div>
     
    </div>
  );
}
}

export default App;
