import React, { useState } from "react";
import styles from "./Search.module.css";
import { filterUsers } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsers } from "../../services";

const Search = () => {
  const dispatch = useDispatch();
  const { filteredUsers } = useSelector(state => state.users);

  const handleSearch = async () => {
    const json = await getUsers();
    dispatch(filterUsers(json));
    console.log(json);
  };

  return (
    <div>
      <input
        className={styles.Search}
        type="text"
        placeholder="Search"
        name="search"
        onChange = {handleSearch}
        required
      />
    </div>
  );
};

export default Search;
