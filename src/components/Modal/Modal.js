import React from 'react';
import styles from './Modal.module.css';


const Modal = (props) => {
    if(!props.isOpen) return null;
    return(
        <>
        <div className={styles.modal} onClick={props.onClose}></div>
        <section className={styles.modalContent}>
            {props.children}
            <button className={styles.closeBttn} onClick={styles.onClose}></button>
        </section>
        </>
    );
};


export default Modal;