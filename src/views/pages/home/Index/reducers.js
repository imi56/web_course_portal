import {
  GET_PRODUCTS_FULFILLED,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_REJECTED,
} from "./constants";

const intialState = {
  pending: false,
  success: false,
  errors: null,
  activePage: 1,
  products: [],
  product_count: 0,
};

const getProductsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case GET_PRODUCTS_FULFILLED: {
      return {
        ...state,
        pending: false,
        success: true,
        errors: null,
        products: action.payload.data,
      };
    }
    case GET_PRODUCTS_REJECTED: {
      return {
        ...state,
        pending: false,
        success: false,
        errors: action.payload,
        products: [],
        product_count: 0,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default getProductsReducer;
