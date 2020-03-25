class App extends React.Component {

state = {
    taco: ""
};

makeAPICall = title => {
    console.log("Before API call");
    fetch("https://taco-randomizer.herokuapp.com/random/?full-tack=true")
      .then(response => response.json())
      .then(json =>
        this.setState({
          taco: json
        })
      );
  };


  render() {
    return (
      <div>
        <div className="header">
            <h1>Wheel of Tacos!</h1>
            <h2>Unique taco recipies at your fingertips</h2>
            
          </div>
        <div className="button-container">
            <button class="button" onClick={this.makeAPICall}>Click to Spin</button>
        </div>
        
        
        
            {this.state.taco ? <TacoInfo taco={this.state.taco} /> : ""}
        
      </div>
    );
  }
}
   


ReactDOM.render(
    <App />,
    document.querySelector(".main")
)