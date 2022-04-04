import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import BrandBox from '../../common/BrandBox/BrandBox';
import Button from '../../common/Button/Button';
import { getAllBrands } from '../../../redux/brandsRedux';

import styles from './BrandsBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const BrandsBar = () => {
  const brands = useSelector(getAllBrands);

  let brandsPerSlider = 6;

  const pagesCount = Math.ceil(brands.length / brandsPerSlider);

  const [activePage, setActivePage] = useState(0);
  const [sliderBrands, setSliderbrands] = useState(
    brands.slice(activePage * brandsPerSlider, (activePage + 1) * brandsPerSlider)
  );

  const moveLeft = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  const moveRight = () => {
    const maxPage = pagesCount - 1;
    if (activePage < maxPage) {
      setActivePage(activePage + 1);
    }
  };

  useEffect(() => {
    setSliderbrands(
      brands.slice(activePage * brandsPerSlider, (activePage + 1) * brandsPerSlider)
    );
  }, [brands, activePage, brandsPerSlider]);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.brands}>
          <Button
            className={styles.brandsBtn}
            noHover
            variant='small'
            onClick={() => moveLeft()}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          {sliderBrands.map(brand => (
            <BrandBox key={brand.id} {...brand} />
          ))}
          <Button
            className={styles.brandsBtn}
            noHover
            variant='small'
            onClick={() => moveRight()}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandsBar;
