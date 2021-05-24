import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
    username: "",
    password: ""
    }
   this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(event) {
   const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
      

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" value={this.state.username} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" value={this.state.password} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
