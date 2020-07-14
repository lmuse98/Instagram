import React from 'react';
import styles from './Home.module.css';
import { useSelector , useDispatch } from "react-redux";
import Header from '../Header/Header';
import UsersList from '../UsersList/UsersList';



const Home = () => {
    
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch(); 


    return(
        <div>
            <Header />
            <UsersList />
        </div>
    )

    }

export default Home;
    