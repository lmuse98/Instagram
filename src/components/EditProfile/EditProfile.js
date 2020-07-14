import React, { useState } from "react";
import styles from "./EditProfile.module.css";
import Modal from "react-bootstrap/Modal";
import CloseIcon from '@material-ui/icons/Clear';
import NewPassword from "../NewPassword/NewPassword";




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
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <NewPassword>

          </NewPassword>
        </Modal.Footer>


        </section>
        
      </Modal>
    </>
  );
};

export default EditProfile;
