import React, { useState } from "react";
import styles from "./EditProfile.module.css";
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@material-ui/icons/Clear';


const EditProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className = {styles.editBttn}  onClick={handleShow}>
        Edit profile
      </button>

      <Modal className = {styles.modal} show={show} onHide={handleClose}>
        <section className = {styles.modalContent}>
        
        <Modal.Header >
        <button className = {styles.closeBttn} onClick={handleClose}>
          <CloseIcon />
          </button>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>


        </section>
        
      </Modal>
    </>
  );
};

export default EditProfile;
