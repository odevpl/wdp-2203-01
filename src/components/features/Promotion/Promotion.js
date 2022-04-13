import styles from './Promotion.module.scss';
import React from 'react';

import initialState from '../../../redux/initialState';

const Promotions = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-12 col-sm-6'}>
            <div className={styles.imgLeft}>
              <img src={initialState.products[0].image} alt='sofa' />
              <div className={'col' + styles.col}>
                <div className={styles.wrapperLeft}>
                  <p>
                    GUEST ROOM <br /> <span>SOFA</span>
                  </p>
                  <p>-20%</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'col-12 col-sm-6'}>
            <div className={'col' + styles.col}>
              <div className={styles.containerUp}>
                <div className={styles.imgRight}>
                  <img
                    className={styles.upleft}
                    src={initialState.products[27].image}
                    alt='chair'
                  />
                  <div className={styles.wrapperRightUp}>
                    <p>
                      <span>OFFICE</span> CHAIR <br />
                      <span className={styles.spanSecond}>COLLECTION</span>
                    </p>
                    <p>$200.00</p>
                  </div>
                  <img
                    className={styles.upright}
                    src={initialState.products[27].image}
                    alt='chair'
                  />
                </div>
              </div>
              <div className={styles.containerDown}>
                <div className={styles.imgRight}>
                  <img
                    src={initialState.products[12].image}
                    alt='promo special collection'
                  />
                  <div className={styles.wrapperRightDown}>
                    <p>
                      <span>SPECIAL</span> COLLECTION
                    </p>
                    <p className={styles.secondLine}>SAVE UP 45% OF FURNITURE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
