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
        <h1>Welcome to Wheel of Tacos!</h1>
        <h2>Click to retrieve a special taco recipe!</h2>
        <button onClick={this.makeAPICall}>Get Your Taco!</button>
        {this.state.taco ? <TacoInfo taco={this.state.taco} /> : ""}
      </div>
    );
  }
}
   


ReactDOM.render(
    <App />,
    document.querySelector(".main")
)