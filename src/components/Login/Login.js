import React from "react";
import styles from "./Login.module.css";
import Logo from './InstaLogo.png';



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
      <div>
      <div className={styles.LoginForm}>
        <form onSubmit={this.mySubmitHandler}>
          <img src={Logo} alt="instLogo"/>
          <h1 className ="slova">{this.state.username} {this.state.password}</h1>
          <p>Enter your name, and submit:</p>
          <input type="text" name ='username' onChange={this.myChangeHandler} />
          <br></br>
          <input type="text" name ='password' onChange={this.myChangeHandler} />
          <br></br>
          <input type="submit" />
        </form>
      </div>
        <div className ={styles.reg}>
          <p className={styles.racun}>Nemate račun?
          <br></br>
          Registrirajte se</p>
        </div>
      </div>
      
    );
  }
}

export default Login;
