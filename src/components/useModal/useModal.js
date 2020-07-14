import React from "react";
import styles from './useModal.module.css';
import Register from '../Register/Register';

const useModal = (props) => {

  if(!props.isOpen) return null;

  return (
    <>
      <div className={styles.modal} onClick = {props.onClose}></div>
      <section className={styles.modalContent}>
       <Register>

       </Register>
        <button className={styles.closeBttn}></button>
      </section>
    </>
  );
}

export default useModal;