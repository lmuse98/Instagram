import React, { Component } from "react";
import styles from "./App.module.css";
import Naslovna from "../Naslovna/Naslovna";
import Login from "../Login/Login";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    return (
      <div className={styles.App}>
        <Naslovna />
        <Login onToggleModal={this.toggleModal} />
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal}>
          <Form />
        </Modal>
      </div>
    );
  }
}

export default App;
