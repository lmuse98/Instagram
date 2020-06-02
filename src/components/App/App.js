import React, { Component } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Naslovna from "../Naslovna/Naslovna";
import Login from "../Login/Login";
import Modal from "../Modal/Modal";
import Register from "../Register/Register";
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { addUsers } from "../../redux/actions";
import { getUsers } from '../../services';


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

  fetchData = async () => {
    const { dispatch } = this.props;
    const json = await getUsers();
    dispatch(addUsers(json));
  };



  componentDidMount() {
    this.fetchData();
  }
    
  

  
  render() {
    return (
      <Router> 
      <div className={styles.App}>
        <Naslovna />
        <Login onToggleModal = {this.toggleModal} />
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal}>
          <Register />
        </Modal> 
        {/* <Header />  */}
      </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  };
}

export default connect(mapStateToProps)(App);
