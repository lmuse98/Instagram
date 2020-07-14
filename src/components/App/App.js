import React, { useEffect } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Naslovna from "../Naslovna/Naslovna";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/actions";
import { getUsers } from "../../services";
import Home from "../Home/Home";
import Favorite from "../Favorite/Favorite";
import Profile from "../Profile/Profile";
import Search from "../Search/Search";
import PrivateRoute from "../Route/PrivateRoute";
import { setUser } from "../../redux/actions";
import LoginPage from "../LoginPage/LoginPage";


const App = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const json = await getUsers();
    dispatch(addUsers(json));
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Router>
      <div className={styles.App}>

        <Route exact path="/" component={LoginPage} />
        <PrivateRoute exact path = "/Home" component = {Home} />
        <PrivateRoute path = "/Favorite" component = {Favorite} />
        <PrivateRoute path = "/Profile/:id" component = {Profile} />
        
        
      </div>
    </Router>
  );
};

export default App;
