import httpClient from "lib/httpClient";

import {
  sendOtpPending,
  sendOtpFulfilled,
  sendOtpRejected,
  otpChanged
} from "./actions";
import { Util } from "classes/common";

export const sendOtpAPI = data => {
  return dispatch => {
    dispatch(sendOtpPending());
    httpClient
      .request("post", "otps", data, false)
      .then(res => {
        dispatch(sendOtpFulfilled(res));
        Util.successToast(res.messages[0]);
      })
      .catch(err => {
        dispatch(sendOtpRejected(err.response));
        Util.errorToast(err.response.data.messages[0]);
      });
  };
};

export const otpChangeDispatcher = password => {
  return dispatch => {
    dispatch(otpChanged(password));
  };
};
