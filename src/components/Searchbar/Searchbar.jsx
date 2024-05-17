import React from 'react';
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

function SearchBar({ onSubmit, query }) {
  return (
    <>
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            Search
          </button>
          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={query}
          />
        </form>
      </header>
    </>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
