import httpClient from "lib/httpClient";

import {
  createRatingPending,
  createRatingFulfilled,
  createRatingRejected,
  createRatingAttrChanged,
} from "./actions";

import { Util } from "classes/common";

export const createRatingAPI = (data) => {
  return dispatch => {
    dispatch(createRatingPending());
    httpClient
      .request("post", "ratings", data)
      .then(res => {
        dispatch(createRatingFulfilled(res));
      })
      .catch(err => {
        dispatch(createRatingRejected(err.response.data));
        Util.errorToast(err.response.data.messages[0]);
      });
  };
};

export const createRatingAttrChangeDispatcher = (attr, value) => {
  return (dispatch) => {
    dispatch(createRatingAttrChanged(attr, value));
  };
};
