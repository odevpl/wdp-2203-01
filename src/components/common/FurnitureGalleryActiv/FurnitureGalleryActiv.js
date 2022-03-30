import React from 'react';
import styles from './FurnitureGallery.module.scss';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';

const FurnitureGalleryActiv = ({ image, name, stars, price }) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={image} alt='' />
        <div className={styles.buttons}>
          <div className={'d-flex justify-content-start ' + styles.favorite}>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faHeart}>Add to favorite</FontAwesomeIcon>
            </Button>
            <div className={styles.tooltipFavorite + ' ' + styles.tooltip}>
              <p>Add to favorite</p>
            </div>
          </div>
          <div className={'d-flex justify-content-start ' + styles.compare}>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
            <div className={styles.tooltipCompare + ' ' + styles.tooltip}>
              <p>Add to compare</p>
            </div>
          </div>
          <div className={'d-flex justify-content-start ' + styles.observed}>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faEye}>Add to observed</FontAwesomeIcon>
            </Button>
            <div className={styles.tooltipObserved + ' ' + styles.tooltip}>
              <p>Add to observed</p>
            </div>
          </div>
          <div className={'d-flex justify-content-start ' + styles.cart}>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
            </Button>
            <div className={styles.tooltipCart + ' ' + styles.tooltip}>
              <p>Add to cart</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.identity}>
            <div className={'d-flex justify-content-start'}>
              <p className={styles.triangleTopleft}></p>
            </div>
            <div className={styles.priceWrapper}>
              <div className={styles.price}>${price}</div>
              <div className={styles.oldPrice}>${price}</div>
            </div>
            <h5>{name}</h5>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(i => (
                <a key={i} href='#'>
                  {i <= stars ? (
                    <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                  )}
                </a>
              ))}
            </div>
            <div className={'d-flex justify-content-end'}>
              <p className={styles.triangleBottomright}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FurnitureGalleryActiv.propTypes = {
  image: PropTypes.node,
  name: PropTypes.string,
  stars: PropTypes.number,
  price: PropTypes.number,
};

export default FurnitureGalleryActiv;
