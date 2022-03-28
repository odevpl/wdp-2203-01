import React from 'react';
import styles from './FurnitureGallery.module.scss';
//import PropTypes from 'prop-types';

const FurnitureGallery = () => {
  return (
    <div className='container'>
      <div className={styles.panelBar}>
        <div className='row'>
          <div className='col'>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <div className={styles.menu}>
              <ul className='row'>
                <li className='col'>
                  <a href='#'>Featured</a>
                </li>
                <li className='col'>
                  <a href='#' className={styles.active}>
                    Top seller
                  </a>
                </li>
                <li className='col'>
                  <a href='#'>Sale off</a>
                </li>
                <li className='col'>
                  <a href='#'>Top rated</a>
                </li>
              </ul>
            </div>
            <FurnitureGallery />
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
