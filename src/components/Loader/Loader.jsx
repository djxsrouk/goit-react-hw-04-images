import React from 'react';
import styles from './Loader.module.css';
import { Circles } from 'react-loader-spinner';

class Loader extends React.Component {
  render() {
    return (
      <>
        <div className={styles.loadingSection}>
          <Circles
            height="80"
            width="80"
            color="#13245c"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </>
    );
  }
}
export default Loader;
