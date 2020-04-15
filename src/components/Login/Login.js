import React from "react";
import styles from "./Login.module.css";
import App from "../App/App";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '' ,
        password:''};
    }    

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
      }

      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

  render() {
    return (
      <div className={styles.LoginForm}>
        <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username} {this.state.password}</h1>
          <p>Enter your name, and submit:</p>
          <input type="text" name ='username' onChange={this.myChangeHandler} />
          <input type="text" name ='password' onChange={this.myChangeHandler} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
