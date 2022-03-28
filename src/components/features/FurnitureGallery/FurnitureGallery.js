import React from 'react';
import styles from './FurnitureGallery.module.scss';

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
              <ul>
                <li>
                  <a href='#'>Featured</a>
                </li>
                <li>
                  <a href='#'>Top seller</a>
                </li>
                <li>
                  <a href='#'>Sale off</a>
                </li>
                <li>
                  <a href='#'>Top rated</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
