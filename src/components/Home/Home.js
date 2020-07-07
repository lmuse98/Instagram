import React from 'react';
import styles from './Home.module.css';
import { useSelector , useDispatch } from "react-redux";
import Header from '../Header/Header';



const Home = () => {
    
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch(); 


    return(
        <div>
            <Header />
        </div>
    )

    }

export default Home;
    