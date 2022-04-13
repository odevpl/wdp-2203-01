import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const Button = ({ children, variant, noHover, className: propClassName, ...props }) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  if (noHover) {
    return (
      <div {...props} className={classes.join(' ')}>
        {children}
      </div>
    );
  } else {
    return (
      <Link to='#' {...props} className={classes.join(' ')}>
        {children}
      </Link>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;
