import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <h3>ProductList</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
// ProductList.propTypes = {};

export default ProductList;
