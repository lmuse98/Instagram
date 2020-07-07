import React, { Component } from 'react';
import styles from './Favorite.module.css';



class Favorite extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                isModalOpen: false
            };
        }
    

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen})
    }

    render() {
        return(
            <div>
               
            </div>
        );
    };

}

export default Favorite;