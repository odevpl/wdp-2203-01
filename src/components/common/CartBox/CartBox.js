import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './CartBox.module.scss';

const CartBox = () => (
  <div className={'col-12 ' + styles.root}>
    <div className='col-1'>
      <FontAwesomeIcon icon={faTimesCircle} className={styles.icon} />
    </div>
    <div className={'col-1 ' + styles.image}></div>
    <div className='col-5'>
      <span className={styles.productName}>Placeholder Product</span>
    </div>
    <div className='col-1'>
      <span className={styles.productPrice}>$30</span>
    </div>
    <div className={'col-3 ' + styles.productQuantity}>quantity</div>
    <div className='col-1'>
      <span className={styles.total}>$30</span>
    </div>
  </div>
);

export default CartBox;
