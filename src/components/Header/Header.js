import React from "react";
import { useSelector  } from 'react-redux';
import styles from "./Header.module.css";
import logo from "../../assets/instagram logo.png";
import Search from "../Search/Search";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PrivateNavLink from '../Route/PrivateLink';
  

const Header = props => {
  const { currentUser } = useSelector((state) => state.users);
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
        <PrivateNavLink to={`/Profile/${currentUser.id}`}>

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
