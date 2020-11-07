import { Util } from "classes/common";
import httpClient from "lib/httpClient";
import {
  getProductsPending,
  getProductsFulfilled,
  getProductsRejected,
  getProductsAttrChanged,
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
