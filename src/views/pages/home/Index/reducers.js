import {
  GET_PRODUCTS_FULFILLED,
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_REJECTED,
  GET_PRODUCTS_ATTR_CHANGED,
  PRODUCT_FILTER_CHANGED,
} from "./constants";
import { CREATE_RATING_FULFILLED } from "../Rating/constants";


const intialState = {
  pending: false,
  success: false,
  errors: null,
  activePage: 1,
  products: [],
  providers: [],
  types: [],
  product_count: 0,
  filters: {
    type: 0,
    provider: 0,
  },
  displayFilters: {
    type: [0, null],
    provider: [0, null],
  },
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
        providers: action.payload.data.provider_options,
        types: action.payload.data.type_options,
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
        providers: [],
        types: [],
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
    case PRODUCT_FILTER_CHANGED: {
      return {
        ...state,
        activePage: 1,
        filters: {
          ...state.filters,
          [action.payload.attr]: action.payload.value,
        },
        displayFilters: {
          ...state.displayFilters,
          [action.payload.attr]: [
            action.payload.value,
            action.payload.displayValue,
          ],
        },
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
