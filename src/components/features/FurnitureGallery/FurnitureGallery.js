import React from 'react';
import styles from './FurnitureGallery.module.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
//import PropTypes from 'prop-types';

import FurnitureGalleryActiv from '../../common/FurnitureGalleryActiv/FurnitureGalleryActiv';
import FurnitureGallerySlider from '../../common/FurnitureGallerySlider/FurnitureGallerySlider';
import { getAllProducts } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';

const FurnitureGallery = () => {
  const products = useSelector(state => getAllProducts(state));
  const product = products[0];

  let productsPerSlider = 6;

  //const [fade, setfade] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [categoryProducts, setCategoryProducts] = useState(
    products.filter(product => product['topSeller'] === true)
  );

  const sliderProducts = categoryProducts.slice(activePage, productsPerSlider);
  const pagesCount = Math.ceil(categoryProducts.length / productsPerSlider);

  const [activeProduct, setActiveProduct] = useState(sliderProducts[1]);

  const handleCategoryChange = category => {
    setCategoryProducts(products.filter(product => product[category] === true));
  };

  //console.log(sliderProducts);

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
                  <a href='#' onClick={() => handleCategoryChange('featured')}>
                    Featured
                  </a>
                </li>
                <li className='col'>
                  <a
                    href='#'
                    onClick={() => handleCategoryChange('topSeller')}
                    className={styles.active}
                  >
                    Top seller
                  </a>
                </li>
                <li className='col'>
                  <a href='#' onClick={() => handleCategoryChange('saleOff')}>
                    Sale off
                  </a>
                </li>
                <li className='col'>
                  <a href='#' onClick={() => handleCategoryChange('topRated')}>
                    Top rated
                  </a>
                </li>
              </ul>
            </div>
            <FurnitureGalleryActiv {...activeProduct} />
            <FurnitureGallerySlider
              sliderProducts={sliderProducts}
              activePage={activePage}
              setActivePage={setActivePage}
              pagesCount={pagesCount}
              activeProduct={activeProduct}
              setActiveProduct={setActiveProduct}
            />
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
