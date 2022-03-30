import React, { useState } from 'react';
import styles from './FurnitureGallerySlider.module.scss';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';

const FurnitureGallerySlider = ({ sliderProducts }) => {
  const [activProduct, setActivProduct] = useState(sliderProducts[1]);

  return (
    <div className={styles.root}>
      <div className={styles.sliderWrapper}>
        <Button className={styles.button} noHover variant='small'>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        {sliderProducts.map(product => (
          <div
            key={product.id}
            className={
              styles.photo +
              ' ' +
              (activProduct.id === product.id ? styles.isActive : styles.notActive)
            }
          >
            <img src={product.image} alt='' />
            <div className={styles.overlay}></div>
          </div>
        ))}
        <Button className={styles.button} noHover variant='small'>
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </div>
    </div>
  );
};

FurnitureGallerySlider.propTypes = {
  sliderProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favorites: PropTypes.bool,
      myStars: PropTypes.number,
      compareActive: PropTypes.bool,
    })
  ),
};

export default FurnitureGallerySlider;
