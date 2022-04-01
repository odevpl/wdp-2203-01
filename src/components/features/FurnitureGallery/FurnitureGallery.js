import React from 'react';
import styles from './FurnitureGallery.module.scss';
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types';

import FurnitureGalleryActiv from '../../common/FurnitureGalleryActiv/FurnitureGalleryActiv';
import FurnitureGallerySlider from '../../common/FurnitureGallerySlider/FurnitureGallerySlider';
import { getAllProducts } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';

const FurnitureGallery = () => {
  const products = useSelector(state => getAllProducts(state));
  const sliderProducts = products.slice(0, 6);
  const product = products[0];

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
            <FurnitureGalleryActiv {...sliderProducts[1]} />
            <FurnitureGallerySlider sliderProducts={sliderProducts} />
          </div>
          <div className='col'>
            <div className={styles.photo}>
              <img src={product.image} alt='' />
              <div className={styles.identity}>
                <div className={styles.priceWrapper}>
                  From <span>$ {product.price}</span>
                </div>
                <h5>{product.name}</h5>
                <Button variant='small'>Shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
