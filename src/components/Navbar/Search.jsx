import React from 'react';
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
        <input className={styles.search} placeholder="Search a song of your choice" />
        <button className={styles.searchButton} type="submit"><FaSearch /></button>
    </form>
  )
}

export default Search;
