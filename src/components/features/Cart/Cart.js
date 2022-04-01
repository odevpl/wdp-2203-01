import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import CartBox from '../../common/CartBox/CartBox';
import Button from '../../common/Button/Button';

import styles from './Cart.module.scss';

const Cart = () => (
  <div className={styles.root}>
    <div className={styles.header}></div>
    <div className={styles.name}>
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
          <div className={'col-3 ' + styles.productQuantity}>quantity</div>
          <div className='col-1'>
            <span className={styles.total}>Total</span>
          </div>
        </div>
        <CartBox />
        <CartBox />
        <CartBox />
        <div className={'col-12 ' + styles.bodyFooter}>
          <div className={styles.coupon}>
            <input placeholder='Coupon code' />
            <Button variant='small'>Apply coupon</Button>
          </div>
          <div>
            <Button variant='small' className={styles.noActive}>
              Update cart
            </Button>
          </div>
        </div>
      </div>
      <div className={'col-12 ' + styles.cartTotal}>
        <div className={'col-7 ' + styles.cartTotalBody}>
          <div className={'col-12 ' + styles.cartTotalHead}>Cart totals</div>
          <div className={'col-11 ' + styles.cartTotalSummary}>
            <span className='col-5'>Subtotal </span>
            <span className='col-7'>$90</span>
          </div>
          <div className={'col-11 ' + styles.cartTotalSummary}>
            <span className='col-5'>Total </span>
            <span className='col-7'>$90</span>
          </div>
          <Button href='/' variant='small' className='col-11'>
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Cart;
