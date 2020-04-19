import React from "react";
import styles from "./Login.module.css";
import Logo from './InstaLogo.png';
import logo2 from './icons8-facebook_old.png';



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
          <input className={styles.korisnickoIme} type="text" name ='username' placeholder="Korisničko ime" onChange={this.myChangeHandler} />
          <input className={styles.lozinka} type="text" name ='password' placeholder="Lozinka" onChange={this.myChangeHandler} />
          <button className={styles.prijavaBttn}>Prijava</button>
          <h1 className={styles.ili}>ili</h1>
          <div className={styles.logoFacebook}><img src = {logo2} alt="logo2" /></div>
        </form>
      </div>
        <div className ={styles.reg}>
          <p className={styles.racun}>Nemate račun?
          Registrirajte se</p>
        </div>
      </div>
      
    );
  }
}

export default Login;
