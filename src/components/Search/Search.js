import React from 'react';
import styles from "./Search.module.css";


const Search = () => {

    return (
      <div>
        <input className = {styles.Search}
        type="text" 
        placeholder="Search" 
        name="search"></input>
      </div>
    );
  }


export default Search;
