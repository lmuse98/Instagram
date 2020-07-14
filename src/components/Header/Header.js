import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/instagram logo.png";
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { logo2 } from "../../assets/avatar.png";
import PrivateNavLink from '../Route/PrivateLink';

const Header = props => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logoIg} src={logo} alt="logo" />
      </div>
      <div className={styles.icons}></div>
      <nav>
        <PrivateNavLink exact to="/Home" className={styles.home}>
          <HomeIcon className={styles.home} style={{ fontSize: 30 }} />
        </PrivateNavLink>
        <PrivateNavLink to="/Favorite">
          <FavoriteIcon className={styles.favorit} style={{ fontSize: 30 }} />
        </PrivateNavLink>
        <PrivateNavLink to="/Profile/:id">
          {" "}
          <img
            className={styles.avatar}
            src={require("../../assets/avatar.png")}
            alt="avatar"
          />{" "}
        </PrivateNavLink>

        <Search />
      </nav>
    </header>
  );
};

export default Header;
