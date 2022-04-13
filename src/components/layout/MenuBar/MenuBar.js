import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const MenuBar = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={'row ' + styles.wrapper}>
          <div className={'col ' + styles.search}>
            <ProductSearch />
          </div>
          <div className={'col ' + styles.menu + (open ? ' ' + styles.activeMenu : '')}>
            <ul>
              <NavLink
                exact
                to='/'
                className={isActive => (isActive ? styles.active : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                exact
                to='/shop/furniture'
                className={isActive => (isActive ? styles.active : undefined)}
              >
                Furniture
              </NavLink>
              <NavLink
                exact
                to='/shop/chair'
                className={isActive => (isActive ? styles.active : undefined)}
              >
                Chair
              </NavLink>
              <NavLink
                exact
                to='/shop/table'
                className={isActive => (isActive ? styles.active : undefined)}
              >
                table
              </NavLink>
              <NavLink
                exact
                to='/shop/sofa'
                className={isActive => (isActive ? styles.active : undefined)}
              >
                sofa
              </NavLink>
              <NavLink
                exact
                to='/shop/bedroom'
                className={isActive => (isActive ? styles.active : undefined)}
              >
                bedroom
              </NavLink>
              <NavLink
                exact
                to='/blog'
                className={isActive => (isActive ? styles.active : undefined)}
              >
                blog
              </NavLink>

            </ul>
          </div>
          <a href='#' className={styles.dropdown} onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
