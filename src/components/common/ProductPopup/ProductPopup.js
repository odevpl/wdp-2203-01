import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductPopup.module.scss';

const ProductPopup = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'col-md-8 ' + styles.popup}>
          <div className={'p-4 ' + styles.head}>
            <h3>Nazwa</h3>
          </div>
          <div className={'d-flex justify-content-around pb-4 ' + styles.body}>
            <div className={'col-md-5 ' + styles.prodImage}></div>
            <div className={'col-md-5 d-flex align-items-center ' + styles.prodDetal}>
              <ul>
                <li>Name: Scott</li>
                <li>Price: 30$</li>
                <li>Ocena: 2 stars</li>
                <li>Kategoria: Bed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPopup.propTypes = {};

export default ProductPopup;
