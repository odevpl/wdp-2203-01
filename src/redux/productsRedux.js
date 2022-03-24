export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* selectors */
export const getAllProducts = ({ products }) => products;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
export const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');
const CHANGE_AMOUNT_OF_STARS = createActionName('CHANGE_AMOUNT_OF_STARS');

/* action creators */
export const createAction_addFavorites = payload => ({
  payload,
  type: ADD_TO_FAVORITES,
});
export const createAction_removeFavorites = payload => ({
  payload,
  type: REMOVE_FROM_FAVORITES,
});
export const changeAmountOfStars = payload => ({
  payload,
  type: CHANGE_AMOUNT_OF_STARS,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = true;
        }
        return product;
      });
    case REMOVE_FROM_FAVORITES:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.favorites = false;
        }
        return product;
      });
    case CHANGE_AMOUNT_OF_STARS:
      return statePart.map(product => {
        if (product.id === action.payload.id) {
          product.myStars = action.payload.amountOfStar;
        }
        return product;
      });
    default:
      return statePart;
  }
}
