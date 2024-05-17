import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ onLoadMore }) {
  return (
    <>
      <div className={styles.containerButton}>
        <button type="button" className={styles.button} onClick={onLoadMore}>
          Load More
        </button>
      </div>
    </>
  );
}
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
