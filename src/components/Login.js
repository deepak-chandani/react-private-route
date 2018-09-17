import React from "react";
import fakeAuth from "../utils/fakeAuth";

export default class Login extends React.Component {
  onClick(e) {
    e.preventDefault();
    fakeAuth.authenticate(this.doAfterLogin.bind(this));
  }

  doAfterLogin() {
    this.props.history.push("/dashboard");
  }

  render() {
    this.onClick = this.onClick.bind(this);

    return (
      <div>
        <h1> Login </h1>
        <div>
          <button type="button" onClick={this.onClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
