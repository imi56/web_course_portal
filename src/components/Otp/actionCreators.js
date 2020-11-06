import axios from "axios";
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
    return axios
      .post(`${process.env.REACT_APP_API_URL}/otps`, data)
      .then(res => {
        dispatch(sendOtpFulfilled(res.data));
        Util.successToast(res.data.messages[0]);
      })
      .catch(err => {
        dispatch(sendOtpRejected(err.response.data));
        Util.errorToast(err.response.data.messages[0]);
      });
  };
};

export const otpChangeDispatcher = password => {
  return dispatch => {
    dispatch(otpChanged(password));
  };
};
