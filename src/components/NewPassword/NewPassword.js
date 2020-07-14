import React, { useState } from 'react';
import styles from './NewPassword.module.css';
import { useSelector } from 'react-redux';
import { updateUser } from '../../services';

const NewPassword = () => {

    const [oldPassword , setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    
    const { currentUser } = useSelector((state) => state.users);
    
    const fetchData = async () => {
        if(currentUser) {
            const json = await updateUser(currentUser, currentUser.id);
            console.log(json);
        }else {
            alert("Lozinka nije uspješno promjenjena");
        }

    }   
    const userPassword = {
        oldPassword,
        newPassword,
    }




    const handleNewPassword = async (e) => {
        setNewPassword(e.target.value);
        console.log(newPassword);
    }

    const handleOldPassword = async (e) => {
        setOldPassword(e.target.value);
        console.log(oldPassword);
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log(currentUser);
    
        if (currentUser.password !== userPassword.oldPassword) {
          alert("Netočna lozinka! Molimo ponovite ispravnu lozinku!");
        } else {
          currentUser.password = userPassword.newPassword;
          fetchData();
    
          alert("Uspješno ste promjenili lozinku");
        }
    
        setOldPassword("");
        setNewPassword("");
}
}

    return(
        <div className = {styles.formaPassword}>
            <form >



            </form>
        </div>
    )
