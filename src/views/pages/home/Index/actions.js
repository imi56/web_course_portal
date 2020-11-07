import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_FULFILLED,
  GET_PRODUCTS_REJECTED,
} from "./constants";

export const getProductsPending = () => {
  return {
    type: GET_PRODUCTS_PENDING
  };
};

export const getProductsFulfilled = payload => {
  return {
    type: GET_PRODUCTS_FULFILLED,
    payload
  };
};

export const getProductsRejected = payload => {
  return {
    type: GET_PRODUCTS_REJECTED,
    payload
  };
};

