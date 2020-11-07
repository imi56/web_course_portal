import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_FULFILLED,
  GET_PRODUCTS_REJECTED,
  GET_PRODUCTS_ATTR_CHANGED,
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

export const getProductsAttrChanged = (attr, value) => {
  return {
    type: GET_PRODUCTS_ATTR_CHANGED,
    payload: { attr: attr, value: value }
  };
};

