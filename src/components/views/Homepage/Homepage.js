import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import CompareBar from '../../features/CompareBar/CompareBar';
import BrandsBar from '../../layout/BrandsBar/BrandsBar';
import BlogHomepage from '../../features/BlogHomepage/BlogHomepage';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <CompareBar />
    <BlogHomepage />
    <BrandsBar />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
