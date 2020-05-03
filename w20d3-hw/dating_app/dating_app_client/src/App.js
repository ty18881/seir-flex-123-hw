import React, { Component } from 'react';

import './App.css';
import Daters from "./components/Hello.js"

class App extends Component {
  render () {
  return (
    <div className="App">
      <div className="HolyGrail">
        <header>YOUR HEADER HERE</header>
        <div className="HolyGrail-body"> 

            <main className="HolyGrail-content"><h2>The Big Open Space in the Center</h2></main>
            <nav className="HolyGrail-nav"><h2>The Left Hand Side Pane</h2></nav>
            <aside className="HolyGrail-ads"><h2>The Right Hand Side Pane</h2></aside>
          </div>

        <footer><h2>YOUR FOOTER HERE - Eventually a form</h2></footer>
        
      </div>
     <Daters />
    </div>
  );
}
}

export default App;
