import React from 'react';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import styles from './ProductPage.module.scss';

const ProductPage = () => (
  <div className={'container ' + styles.pageWrapper}>
    <div>
      <NewFurniture productsPage='4' />
    </div>
  </div>
);

export default ProductPage;
