import React, { Component } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Naslovna from "../Naslovna/Naslovna";
import Login from "../Login/Login";
import Modal from "../Modal/Modal";
import Register from "../Register/Register";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { addUsers } from "../../redux/actions";
import { getUsers } from "../../services";
import Home from "../Home/Home";
import Favorite from "../Favorite/Favorite";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import PrivateRoute from "../Route/PrivateRoute";
import { setUser } from "../../redux/actions";

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
          {/* <Route
            path="/Naslovna"
            render={() => (
              <div>
                <Naslovna />
                <Login onToggleModal={this.toggleModal} />
                <Modal
                  isOpen={this.state.isModalOpen}
                  onClose={this.toggleModal}
                >
                  <Register />
                </Modal>
              </div>
            )}
          /> */}

          {/* <Header /> */}

          {/* <PrivateRoute exact path="/Home" component={Home} />
          <PrivateRoute
            path="/obavijesti"
            render={() => (
              <div>
                <Favorite />
              </div>
            )}
          />

          <PrivateRoute
            path="/Profile"
            render={() => (
              <div>
                <Profile />
              </div>
            )}
          /> */}

          <Route exact path ="/" component = {Naslovna}/>
          <Route exact path ="/" component = {Login}/>
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
