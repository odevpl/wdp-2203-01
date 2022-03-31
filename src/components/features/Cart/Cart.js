import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import CartBox from '../../common/CartBox/CartBox';

import styles from './Cart.module.scss';

const Cart = () => (
  <div className={styles.root}>
    <div className={styles.header}>
      <div className='container'>
        <h2>The Templace</h2>
      </div>
    </div>
    <div className={'d-flex align-items-center ' + styles.name}>
      <div className='container d-flex justify-content-between align-items-center'>
        <h2>Cart</h2>
        <span>
          <FontAwesomeIcon className={styles.icon} icon={faHome} /> &gt; Cart
        </span>
      </div>
    </div>
    <div className='container'>
      <div className={styles.cartBody}>
        <div className={'col-12 ' + styles.bodyHeader}>
          <div className='col-1'></div>
          <div className={'col-1'}></div>
          <div className='col-5'>
            <span className={styles.productName}>Product</span>
          </div>
          <div className='col-1'>
            <span className={styles.productPrice}>Price</span>
          </div>
          <div className='col-3'>quantity</div>
          <div className='col-1'>
            <span className={styles.total}>Total</span>
          </div>
        </div>
        <CartBox />
      </div>
    </div>
  </div>
);

export default Cart;
