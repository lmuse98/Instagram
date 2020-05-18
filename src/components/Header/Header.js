import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/instagram logo.png";
import Search from "../Search/Search";
import { NavLink } from 'react-router-dom';
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { logo2 } from "../../assets/avatar.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logoIg} src={logo} alt="logo" />
      </div>
      <div className={styles.icons}>
        <img
          className={styles.avatar}
          src={require("../../assets/avatar.png")}
          alt="avatar"
        />
      </div>
      <nav>
          <NavLink exact to ="/">
              
          </NavLink>
        <Search />
        <HomeIcon className={styles.home} style={{ fontSize: 30 }} />
        <FavoriteIcon className={styles.favorite} style={{ fontSize: 30 }} />
      </nav>
    </header>
  );
};

export default Header;
