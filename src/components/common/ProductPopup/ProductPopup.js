import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductPopup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';

const ProductPopup = ({
  close,
  name,
  price,
  category,
  promo,
  image,
  stars,
  myStars,
}) => {
  const rating = [];
  for (let i = 0; i < stars; i++) {
    rating.push(
      <FontAwesomeIcon key={i} icon={faStar}>
        {i} stars
      </FontAwesomeIcon>
    );
  }

  const myRating = [];
  for (let i = 0; i < myStars; i++) {
    myRating.push(
      <FontAwesomeIcon key={i} className={styles.myRate} icon={faStar}>
        {i} stars
      </FontAwesomeIcon>
    );
  }

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.root}>
        <div className='container'>
          <div className={'col-md-8 ' + styles.popup}>
            <div
              className={
                'col-auto d-flex justify-content-between align-items-center p-4 ' +
                styles.head
              }
            >
              <FontAwesomeIcon
                icon={faTimes}
                className={'col-auto ' + styles.icon}
                onClick={close}
              />
              <h3 className='col-auto text-right'>{name}</h3>
            </div>
            <div className={'d-flex justify-content-around pb-4 ' + styles.body}>
              <div className={'col-md-5 ' + styles.prodImage}>
                <img src={image} alt={name} />
                {promo && <div className={styles.sale}>{promo}</div>}
              </div>
              <div className={'col-md-5 d-flex align-items-center ' + styles.prodDetal}>
                <ul>
                  <li>
                    <span>Name: </span>
                    {name}
                  </li>
                  <li>
                    <span>Price: </span>
                    {price}$
                  </li>
                  <li>
                    <span>Rating: </span>
                    {myStars ? <>{myRating}</> : <>{rating}</>}
                  </li>
                  <li>
                    <span>Category: </span>
                    {category}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductPopup.propTypes = {
  close: PropTypes.func,
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  promo: PropTypes.string,
  image: PropTypes.node,
  stars: PropTypes.number,
  myStars: PropTypes.number,
};

export default ProductPopup;
