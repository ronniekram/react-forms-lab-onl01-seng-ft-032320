import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleLogin();
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleUserChange(event)} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePassChange(event)} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={event => this.handleSubmit(event)}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;