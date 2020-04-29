import React from "react";
import styles from "./Login.module.css";
import Logo from "../../assets/InstaLogo.png";
import logo2 from "../../assets/icons8-facebook_old.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  mySubmitHandler = event => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  };

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <div>
        <div className={styles.LoginForm}>
          <form onSubmit={this.mySubmitHandler}>
            <img src={Logo} alt="instLogo" />
            <input
              className={styles.korisnickoIme}
              type="text"
              name="username"
              placeholder="Korisničko ime"
              onChange={this.myChangeHandler}
            />
            <input
              className={styles.lozinka}
              type="password"
              name="password"
              placeholder="Lozinka"
              onChange={this.myChangeHandler}
            />
            <button className={styles.prijavaBttn}>Prijava</button>
            <h1 className={styles.ili}>ili</h1>
            <div className={styles.logoFacebook}>
              <img src={logo2} alt="logo2" />
            </div>
            <div className={styles.prijavaFace}>
              <p>Prijavite se putem Facebooka</p>
            </div>
            <p className={styles.zabPass}>Zaboravili ste lozinku?</p>
          </form>
        </div>
        <div className={styles.reg}>
          <p className={styles.racun}>Nemate račun?</p>
          <a
            href
            className={styles.racunReg}
            onClick={this.props.onToggleModal}
          >
            Registrirajte se{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
