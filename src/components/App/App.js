import React, { Component } from "react";
import styles from "./App.module.css";
import Naslovna from "../Naslovna/Naslovna";
import Login from "../Login/Login";
import Modal from "../Modal/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }





  toggleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }


  

  render() {
    return (
      <div className={styles.App}>
        <Naslovna />
        <Login />
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal}>
        <h1>Naslov</h1>
          <p>Ovo je child</p>
        </Modal>
      </div>
    );
  }
}

export default App;
