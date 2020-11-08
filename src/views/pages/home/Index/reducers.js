import {
  GET_PRODUCTS_FULFILLED,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_REJECTED,
  GET_PRODUCTS_ATTR_CHANGED
} from "./constants";
import { CREATE_RATING_FULFILLED } from "../Rating/constants";


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
        products: action.payload.data.products,
        product_count: action.payload.data.product_count,
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
    case GET_PRODUCTS_ATTR_CHANGED: {
      return {
        ...state,
        [action.payload.attr]: action.payload.value,
      };
    }
    case CREATE_RATING_FULFILLED: {
      return {
        ...state,
        products: state.products.map((product) =>
        product.id === action.payload.data.id
            ? { ...product, ...action.payload.data }
            : product
        ),
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
