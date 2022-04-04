import React from 'react';
import styles from './FurnitureGallery.module.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
//import PropTypes from 'prop-types';

import FurnitureGalleryActiv from '../../common/FurnitureGalleryActiv/FurnitureGalleryActiv';
import FurnitureGallerySlider from '../../common/FurnitureGallerySlider/FurnitureGallerySlider';
import { getAllProducts } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';

const FurnitureGallery = () => {
  const products = useSelector(state => getAllProducts(state));
  const product = products[0];

  let productsPerSlider = 6;

  const [fadeAll, setFadeAll] = useState(false);
  const [fadeMainPhoto, setFadeMainPhoto] = useState(false);
  const [activeTab, setActivTab] = useState('topSeller');

  const [activePage, setActivePage] = useState(0);
  const [categoryProducts, setCategoryProducts] = useState(
    products.filter(product => product['topSeller'] === true)
  );
  const [sliderProducts, setSliderProducts] = useState(
    categoryProducts.slice(
      activePage * productsPerSlider,
      (activePage + 1) * productsPerSlider
    )
  );

  const pagesCount = Math.ceil(categoryProducts.length / productsPerSlider);

  const [activeProduct, setActiveProduct] = useState(sliderProducts[1]);

  const handleCategoryChange = category => {
    setFadeAll(true);
    setTimeout(function() {
      setFadeAll(false);
      setCategoryProducts(products.filter(product => product[category] === true));
      setActivePage(0);
    }, 250);
  };

  const changeActivProduct = product => {
    setFadeMainPhoto(true);
    setTimeout(function() {
      setFadeMainPhoto(false);
      setActiveProduct(product);
      setActivePage(0);
    }, 250);
  };

  useEffect(() => {
    setActiveProduct(categoryProducts[1]);
  }, [categoryProducts]);

  useEffect(() => {
    setSliderProducts(
      categoryProducts.slice(
        activePage * productsPerSlider,
        (activePage + 1) * productsPerSlider
      )
    );
  }, [categoryProducts, activePage, productsPerSlider]);

  return (
    <div className='container'>
      <div className={styles.panelBar}>
        <div className='row'>
          <div className='col'>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <div className={styles.menu}>
              <ul className='row'>
                <li className='col'>
                  <a
                    href='#'
                    onClick={() => {
                      handleCategoryChange('featured');
                      setActivTab('featured');
                    }}
                    className={
                      activeTab === 'featured' ? styles.active : styles.notActive
                    }
                  >
                    Featured
                  </a>
                </li>
                <li className='col'>
                  <a
                    href='#'
                    onClick={() => {
                      handleCategoryChange('topSeller');
                      setActivTab('topSeller');
                    }}
                    className={
                      activeTab === 'topSeller' ? styles.active : styles.notActive
                    }
                  >
                    Top seller
                  </a>
                </li>
                <li className='col'>
                  <a
                    href='#'
                    onClick={() => {
                      handleCategoryChange('saleOff');
                      setActivTab('saleOff');
                    }}
                    className={
                      activeTab === 'saleOff' ? styles.active : styles.notActive
                    }
                  >
                    Sale off
                  </a>
                </li>
                <li className='col'>
                  <a
                    href='#'
                    onClick={() => {
                      handleCategoryChange('topRated');
                      setActivTab('topRated');
                    }}
                    className={
                      activeTab === 'topRated' ? styles.active : styles.notActive
                    }
                  >
                    Top rated
                  </a>
                </li>
              </ul>
            </div>
            <div className={fadeAll ? styles.noVisability : styles.visability}>
              <div className={fadeMainPhoto ? styles.noVisability : styles.visability}>
                <FurnitureGalleryActiv {...activeProduct} />
              </div>
              <FurnitureGallerySlider
                sliderProducts={sliderProducts}
                activePage={activePage}
                setActivePage={setActivePage}
                pagesCount={pagesCount}
                activeProduct={activeProduct}
                changeActivProduct={changeActivProduct}
              />
            </div>
          </div>
          <div className='col'>
            <div className={styles.photo}>
              <img src={product.image} alt='' />
              <div className={styles.identity}>
                <div className={styles.priceWrapper}>
                  From <span>$ {product.price}</span>
                </div>
                <h5>{product.name}</h5>
                <Button variant='small'>Shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
