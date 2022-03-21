import React from 'react';
import styles from './SelectCategory.module.scss';

const SelectCategory = () => (
  <ul className={styles.horizontalMenu}>
    <li>
      Select a category
      <ul className={styles.dropdown}>
        <li>category one</li>
        <li>category two</li>
        <li>category three</li>
      </ul>
    </li>
  </ul>
);

export default SelectCategory;
