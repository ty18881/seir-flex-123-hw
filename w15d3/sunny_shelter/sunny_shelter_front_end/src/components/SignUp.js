import React from "react";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSignUp(this.state.username, this.state.password);
  };

  render() {
    return (
      <>
        <h3>Or Sign Up to access the Sunny Philadelphia Shelter's Website</h3>
        <form onSubmit={this.handleSubmit} style={{ flexDirection: "column" }}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="example: yourname@email.com"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </>
    );
  }
}

export default SignUp;