
const actions = {
  GET_COLORS: 'GET_COLORS',
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_PRODUCTS: 'GET_PRODUCTS',
  PUT_COLORS: 'PUT_COLORS',
  PUT_CATEGORIES: 'PUT_CATEGORIES',
  PUT_PRODUCTS: 'PUT_PRODUCTS',
  getColors: () => {
    return (dispatch, getState) => {
      dispatch({
        type: actions.GET_COLORS
      });
    }
  },
  getCategories: () => {
    return (dispatch, getState) => {
      dispatch({
        type: actions.GET_CATEGORIES
      });
    }
  },
  getProducts: () => {
    return (dispatch, getState) => {
      dispatch({
        type: actions.GET_PRODUCTS
      });
    }
  }
};

export default actions;
