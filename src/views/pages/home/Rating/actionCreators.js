import httpClient from "lib/httpClient";

import {
  createRatingPending,
  createRatingFulfilled,
  createRatingRejected,
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
