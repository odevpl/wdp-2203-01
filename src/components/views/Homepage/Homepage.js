import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';
import CompareBar from '../../features/CompareBar/CompareBar';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGallery';
import BrandsBar from '../../layout/BrandsBar/BrandsBar';
import BlogHomepage from '../../features/BlogHomepage/BlogHomepage';
import Chatbox from '../../features/Chatbox/Chatbox';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <NewFurniture />
    <FurnitureGallery />
    <Feedback />
    <CompareBar />
    <BlogHomepage />
    <BrandsBar />
    <Chatbox />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
