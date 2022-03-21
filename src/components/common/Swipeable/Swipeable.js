import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';

const Swipeable = ({ leftAction, rightAction, children }) => (
  <div className={styles.root}>
    <div className={styles.iconWrapper}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faArrowCircleLeft}
        onClick={leftAction}
      />
      <FontAwesomeIcon
        className={styles.icon}
        icon={faArrowCircleRight}
        onClick={rightAction}
      />
    </div>
    {children}
  </div>
);

Swipeable.propTypes = {
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
  children: PropTypes.node,
};

export default Swipeable;
