import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { removeFromCompare } from '../../../redux/compareRedux';
import { removeActiveClass } from '../../../redux/productsRedux';

import styles from './CompareBox.module.scss';

const CompareBox = compareProduct => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    dispatch(removeActiveClass(compareProduct.id));
    dispatch(removeFromCompare(compareProduct.id));
  };

  return (
    <div className={styles.root} onClick={() => handleSubmit()}>
      <img src={compareProduct.image} alt={compareProduct.name} />
      <div className={styles.close}>
        <FontAwesomeIcon icon={faTimes} className={styles.icon} />
      </div>
    </div>
  );
};

CompareBox.propTypes = {
  compareProduct: PropTypes.object,
};

export default CompareBox;
