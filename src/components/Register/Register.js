import React, { Component } from "react";
import styles from "./Register.module.css";
import logo from "../../assets/InstaLogo.png";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      name: "",
      password: "",
      
    };


  }

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
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.regEmail}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className={styles.regIme}
            type="text"
            name="ime"
            placeholder="Ime i Prezime"
          />
          <input
            className={styles.regKorisn}
            type="text"
            name="username"
            placeholder="Korisničko ime"
          />
          <input
            className={styles.regPass}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className={styles.registBttn}>Dalje</button>
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

export default Form;