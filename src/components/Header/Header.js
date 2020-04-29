import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/instagram logo.png';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
    return(
        <header className = {styles.header}>
            <div><img className={styles.logoIg} src = {logo} alt ="logo" /></div>
            <div className ={styles.icons}>
            <SearchIcon className ={styles.srchIcon}></SearchIcon>
            <input className={styles.srch} type ="text" placeholder="Search" name="search"></input>
            
            </div>
        </header>
    )
}

export default Header;