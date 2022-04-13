import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  getAllProducts,
  createAction_addFavorites,
  createAction_removeFavorites,
  addActiveClass,
  updateInitialState,
} from '../../../redux/productsRedux';
import { addToCompare, getAllCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  products: getAllProducts(state),
  compare: getAllCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: productId => dispatch(createAction_addFavorites(productId)),
  removeFromFavorites: productId => dispatch(createAction_removeFavorites(productId)),
  addToCompare: compareProduct => dispatch(addToCompare(compareProduct)),
  addActiveClass: productId => dispatch(addActiveClass(productId)),
  updateInitialState: productId => dispatch(updateInitialState(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
