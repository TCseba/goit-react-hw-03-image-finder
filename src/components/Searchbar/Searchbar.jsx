import React from 'react';
import styles from './Searchbar.module.css';
import { IoIosSearch } from 'react-icons/io';

export default function Searchbar({ onSubmit }) {
  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={onSubmit}>
        <button className={styles.button} type="submit">
          <IoIosSearch />
        </button>
        <input
          className={styles.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
