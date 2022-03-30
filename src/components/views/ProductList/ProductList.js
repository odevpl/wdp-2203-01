import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className={styles.banner}>
            <span>Banner</span>
          </div>
        </div>
        <div className='col-9'>
          <div className={styles.productList}>
            <span>Product List</span>
          </div>
        </div>
        <div className='col-3'>
          <div className={styles.filters}>
            <span>Filters</span>
          </div>
        </div>
        <div className='col-12'>
          <div className={styles.brands}>
            <span>Brands</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};




// ProductList.propTypes = {};

export default ProductList;
