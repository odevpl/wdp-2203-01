import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';
import { getMode } from '../../../redux/modeRedux';
import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  mode: getMode(state),
});

export default connect(mapStateToProps)(NewFurniture);
