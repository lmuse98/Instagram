import React from "react";
import styles from "./Register.module.css";
import logo from "../../assets/InstaLogo.png";
import { connect } from "react-redux";
import { postUser } from "../../services";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      username: "",
      password: ""
    };
  }

  onSubmitHandler = async e => {
    e.preventDefault();

    try {
      await postUser(this.state);
    } catch (error) {
      console.log(error);
    }

    this.setState({
      name: "",
      email: "",
      username: "",
      password: ""
    });
  };

  onChangeHandler = e => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div className={styles.slika}>
          <img src={logo} alt="instLogo" />
        </div>
        <h1 className={styles.podNaslov}>
          Registrirajte se da biste vidjeli fotografije i videozapise
          prijatelja.
        </h1>
        <button className={styles.prijavaFaceb}>
          Prijavite se putem Facebooka
        </button>
        <h1 className={styles.ili}>ili</h1>

        <form onSubmit={this.onSubmitHandler}>
          <input
            className={styles.regIme}
            type="text"
            name="name"
            onChange={this.onChangeHandler}
            placeholder="Ime i Prezime"
          />
          <input
            className={styles.regEmail}
            type="email"
            name="email"
            onChange={this.onChangeHandler}
            placeholder="Email"
          />
          <input
            className={styles.regKorisn}
            type="text"
            name="username"
            onChange={this.onChangeHandler}
            placeholder="Korisničko ime"
          />
          <input
            className={styles.regPass}
            type="password"
            name="password"
            onChange={this.onChangeHandler}
            placeholder="Password"
          />
          <button type="submit" className={styles.registBttn}>
            Dalje
          </button>

          <p className={styles.uvjeti}>
            Registracijom prihvaćate naše Uvjete upotrebe. U našim Pravilima o
            upotrebi podataka saznajte kako prikupljamo, upotrebljivamo i
            dijelimo vaše podatke, a u Pravilima o upotebi kolačića saznajte
            kako se služimo kolačićima i sličnom tehnologijom.
          </p>
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  };
}

export default connect(mapStateToProps)(Form);
