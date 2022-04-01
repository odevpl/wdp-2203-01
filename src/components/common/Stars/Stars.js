import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeAmountOfStars } from '../../../redux/productsRedux';
import styles from './Stars.module.scss';

const Stars = ({ stars, myStars, id }) => {
  const dispatch = useDispatch();

  const [starsHover, setStarsHover] = useState(0);

  const mouseEnter = amountOfStar => {
    setStarsHover(amountOfStar);
  };

  const selectStars = amountOfStar => {
    dispatch(changeAmountOfStars({ id, amountOfStar }));
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          id={i}
          onMouseEnter={e => {
            mouseEnter(i);
          }}
          onMouseLeave={e => {
            setStarsHover(0);
          }}
          onClick={e => {
            e.preventDefault();
            selectStars(i);
          }}
        >
          {myStars === 0 && starsHover === 0 && i <= stars && (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          )}
          {myStars === 0 && starsHover === 0 && i > stars && (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
          {myStars !== 0 && starsHover === 0 && i <= myStars && (
            <FontAwesomeIcon className={styles.select} icon={faStar}>
              {i} stars
            </FontAwesomeIcon>
          )}
          {myStars !== 0 && starsHover === 0 && i > myStars && (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
          {myStars === 0 && starsHover !== 0 && i <= starsHover && (
            <FontAwesomeIcon className={styles.select} icon={faStar}>
              {i} stars
            </FontAwesomeIcon>
          )}
          {myStars === 0 && starsHover !== 0 && i > starsHover && (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
          {myStars !== 0 && starsHover !== 0 && i <= starsHover && (
            <FontAwesomeIcon className={styles.select} icon={faStar}>
              {i} stars
            </FontAwesomeIcon>
          )}
          {myStars !== 0 && starsHover !== 0 && i > starsHover && (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number,
  myStars: PropTypes.number,
  id: PropTypes.string,
};

export default Stars;
