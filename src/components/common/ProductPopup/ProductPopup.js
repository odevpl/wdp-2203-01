import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductPopup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductPopup = ({ close }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'col-md-8 ' + styles.popup}>
          <div
            className={
              'd-flex justify-content-between align-items-center p-4 ' + styles.head
            }
          >
            <FontAwesomeIcon icon={faTimes} className={styles.icon} onClick={close} />
            <h3>Nazwa</h3>
          </div>
          <div className={'d-flex justify-content-around pb-4 ' + styles.body}>
            <div className={'col-md-5 ' + styles.prodImage}></div>
            <div className={'col-md-5 d-flex align-items-center ' + styles.prodDetal}>
              <ul>
                <li>
                  <span>Name: </span>Scott
                </li>
                <li>
                  <span>Price: </span>30$
                </li>
                <li>
                  <span>Rating: </span>2 stars
                </li>
                <li>
                  <span>Category: </span>Bed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPopup.propTypes = {
  close: PropTypes.func,
};

export default ProductPopup;
