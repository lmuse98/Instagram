import React, { Component } from "react";
import styles from "./EditForm.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      name: "",
      password: "",
      emailError: "",
      usernameError: "",
      name: "",
      passwordError:"",

    };
  }

  render() {
    return (
      <form>
        <div>
          <input email="email" 
          placeholder="email" 
          value={this.state.email} />
        </div>

        <div>
          <input
            username="username"
            placeholder="username"
            value={this.state.username}
          />
        </div>

        <div>
          <input name="name" 
          placeholder="name" 
          value={this.state.name} />
        </div>

        <input
          name="password"
          placeholder="password"
          value={this.state.password}
        />

        
      </form>
    );
  }
}
