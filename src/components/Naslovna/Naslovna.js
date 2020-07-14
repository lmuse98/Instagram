import React from 'react';
import styles from './Naslovna.module.css';
import mob from '../../assets/mob.png';
import logo from './macLogo.svg';
import logo2 from './google-play-badge.svg';



const Naslovna = () => {

        return(
        <div>
                <div><img className={styles.mob} src={mob} alt="mob"/></div> 
                <div className={styles.logoMac}><img src ={logo} alt="logo" /></div>
                <div className={styles.logoAndroid}><img src = {logo2} alt ="logo2" /></div>
                <p className={styles.preuzmi}>Preuzmite aplikaciju.</p>
        </div>
        )
        
    }



export default Naslovna;