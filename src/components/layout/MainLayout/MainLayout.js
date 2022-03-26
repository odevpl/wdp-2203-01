import React, { useLayoutEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';


const MainLayout = ({ children, updateMode, mode }) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const mobile = 'mobile';
    const tablet = 'tablet';
    const desktop = 'desktop';

    function handleChangeSize() {
      let newMode;
      if (window.screen.width <= 480) {
        newMode = mobile;
      } else if (window.screen.width >= 481 && window.screen.width <= 820) {
        newMode = tablet;
      } else if (window.screen.width >= 821) {
        newMode = desktop;
      }
      dispatch(updateMode(newMode));
    }
    handleChangeSize();

    window.addEventListener('resize', handleChangeSize);
    return () => window.removeEventListener('resize', handleChangeSize);
  }, [dispatch, mode, updateMode]);

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
