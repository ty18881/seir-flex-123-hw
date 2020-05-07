import React from "react";

class SignIn extends React.Component {

    state = {
        username: "",
        password: ""
    };

    handleChange = (event) => {
        this.setState(
            {
                [event.target.id]: event.target.value
            }
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSignIn(this.state.username, this.state.password);
    };

    render() {
        return (
            <>
              <h3>Please sign in to continue</h3>
              <form onSubmit={this.handleSubmit} style={{ flexDirection: "column" }}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  placeholder="example: yourname@email.com"
                  autoFocus
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                <input type="submit" value="Log In" />
              </form>
            </>
          );


    }

}

export default SignIn;