import actions from './actions';

const initState = {
  colors: {},
  categories: {},
  products: [],
  product: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.PUT_COLORS:
      return Object.assign({}, state, {
        colors: {...action.colors}
      });
    case actions.PUT_CATEGORIES:
      return Object.assign({}, state, {
        categories: {...action.categories}
      });
    case actions.PUT_PRODUCTS:
      return Object.assign({}, state, {
        products: [...action.products]
      });
    case actions.PUT_PRODUCT:
      return Object.assign({}, state, {
        product: {...action.product}
      });
    default:
      return state;
  }
};
