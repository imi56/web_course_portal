import { Util } from "classes/common";
import httpClient from "lib/httpClient";
import {
  getProductsPending,
  getProductsFulfilled,
  getProductsRejected,
  getProductsAttrChanged,
  productFilterChanged,
} from "./actions";

export const getProductsAPI = (filters = {}) => {
  const sanitizedFilters = Util.sanitizeFilter(filters);
  return dispatch => {
    dispatch(getProductsPending());
    httpClient
      .request("get", `products?${Util.convertToUrlParams(sanitizedFilters)}`)
      .then(res => {
        dispatch(getProductsFulfilled(res));
        Promise.resolve();
      })
      .catch(err => {
        dispatch(getProductsRejected(err.response.data));
      });
  };
};

export const getProductsAttrChangeDispatcher = (attr, value) => {
  return dispatch => {
    dispatch(getProductsAttrChanged(attr, value));
  };
};

export const productFilterChangeDispatcher = (
  attr,
  value,
  displayValue = null
) => {
  return dispatch => {
    dispatch(productFilterChanged(attr, value, displayValue));
  };
};
