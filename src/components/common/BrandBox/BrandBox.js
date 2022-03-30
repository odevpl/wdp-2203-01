import React from 'react';
import PropTypes from 'prop-types';

import styles from './BrandBox.module.scss';

const BrandBox = brand => (
  <div className={styles.root}>
    <div className={styles.box}>
      <img src={brand.image} alt={brand.name} />
    </div>
  </div>
);

BrandBox.propTypes = {
  brand: PropTypes.array,
};

export default BrandBox;
