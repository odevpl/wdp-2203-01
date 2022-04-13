import React from 'react';
import styles from './ProductPage.module.scss';
import Swipeable from '../../common/Swipeable/Swipeable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import PropTypes from 'prop-types';

class ProductPage extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fade: false,
  };
  handlePageChange(newPage) {
    this.setState({ fade: true });

    setTimeout(
      function() {
        this.setState({ fade: false });
        this.setState({ activePage: newPage });
      }.bind(this),
      250
    );
  }
  handleCategoryChange(newCategory) {
    this.setState({ fade: true });

    setTimeout(
      function() {
        this.setState({ fade: false });
        this.setState({ activeCategory: newCategory });
      }.bind(this),
      250
    );
  }

  render() {
    const { categories, products, mode } = this.props;
    const { activeCategory, activePage, fade } = this.state;

    let productsPerPage;

    switch (mode) {
      default:
        productsPerPage = 4;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

    const moveLeft = () => {
      const activePage = this.state.activePage;
      if (activePage > 0) {
        this.handlePageChange(activePage - 1);
      }
    };

    const moveRight = () => {
      const activePage = this.state.activePage;
      const maxPage = pagesCount - 1;
      if (activePage < maxPage) {
        this.handlePageChange(activePage + 1);
      }
    };

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : undefined}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <Swipeable leftAction={moveLeft} rightAction={moveRight}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>New furniture</h3>
                </div>
                <div className={'col ' + styles.menu}>
                  <ul>
                    <li className={styles.horizontalMenu}>
                      <FontAwesomeIcon className={styles.icon} icon={faBars} />
                      <ul className={styles.dropdown}>
                        {categories.map(item => (
                          <li key={item.id}>
                            <a
                              className={
                                item.id === activeCategory ? styles.active : undefined
                              }
                              onClick={() => this.handleCategoryChange(item.id)}
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className={fade ? styles.noVisability : styles.visability}>
              <div className='row'>
                {categoryProducts
                  .slice(
                    activePage * productsPerPage,
                    (activePage + 1) * productsPerPage
                  )
                  .map(item => (
                    <div key={item.id} className='col-lg-3 col-sm-6'>
                      <ProductBox {...item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}
ProductPage.propTypes = {
  children: PropTypes.node,
  productsPage: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  mode: PropTypes.string,
};
ProductPage.defaultProps = {
  categories: [],
  products: [],
};

export default ProductPage;
