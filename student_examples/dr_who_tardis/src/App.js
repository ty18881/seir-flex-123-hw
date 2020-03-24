import React from "react";
import "./styles.css";

class DivThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tardis: {
        name: "Time and Relative Dimension in Space",
        caps: false
      }
    };
  }

  changeIt = text => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      });
    }
  };

  render() {
    return (
      <div>
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>
          {this.state.tardis.name}
        </h3>
      </div>
    );
  }
}
class DivTwo extends React.Component {
  render() {
    return (
      <div>
        <DivThree
          tardis={this.props.tardis}
          handleClick={this.props.handleClick}
        />

        <DivThree
          tardis={this.props.tardis}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}

class DivOne extends React.Component {
  render() {
    return (
      <div>
        <DivTwo
          tardis={this.props.tardis}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }
}
export default class App extends React.Component {
  state = {
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false
    }
  };

  // function to set name to all caps

  changeIt = text => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <DivOne tardis={this.state.tardis} handleClick={this.changeIt} />
      </div>
    );
  }
}
