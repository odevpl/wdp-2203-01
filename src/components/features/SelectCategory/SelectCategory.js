import React from 'react';
import styles from './SelectCategory.module.scss';

const SelectCategory = () => (
  <ul className={styles.horizontalMenu}>
    <li>
      Select a category
      <ul className={styles.dropdown}>
        <li>Bed</li>
        <li>Chair</li>
        <li>Sofa</li>
        <li>Table</li>
        <li>Dining</li>
      </ul>
    </li>
  </ul>
);

export default SelectCategory;
