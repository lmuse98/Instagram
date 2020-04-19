import React from 'react';
import styles from './Naslovna.module.css';
import mob from './mob.png';
import logo from './macLogo.svg';


class Naslovna extends React.Component {

    constructor(props) {
        super();

    }


    render() {
        return(
            <div>
                <div><img className={styles.mob} src={mob} alt="mob"/></div> 
                <div><img className={styles.logoMac} src ={logo} alt="logo" /></div>
            </div>
        )
    }

}

export default Naslovna;