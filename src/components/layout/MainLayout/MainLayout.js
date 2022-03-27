import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const MainLayout = ({ children, updateMode, mode }) => {
  function handlechangeSize() {
    let newMode;
    if (window.innerWidth < 576) {
      newMode = 'mobile';
    } else if (window.innerWidth >= 992) {
      newMode = 'desktop';
    } else newMode = 'tablet';

    if (newMode !== mode) {
      updateMode(newMode);
    }
  }
  handlechangeSize();

  useEffect(() => {
    window.addEventListener('resize', handlechangeSize);
    return () => {
      window.removeEventListener('resize', handlechangeSize);
    };
  });

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  updateMode: PropTypes.func,
  mode: PropTypes.string,
};

export default MainLayout;
