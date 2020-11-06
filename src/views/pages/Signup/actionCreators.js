import axios from "axios";
import {
  signupPending,
  signupFulfilled,
  signupRejected,
  phoneChanged,
  signupFormChanged,
  signupValidation,
  landmarkTypeChanged
} from "./actions";
import { Util } from "classes/common";
import { otpChangeDispatcher } from "components/Otp/actionCreators";

import Authentication from "src/helpers/Authentication";

export const signupAPI = (data, afterSignupNavigation) => {
  return dispatch => {
    dispatch(signupPending());
    return axios
      .post(`${process.env.REACT_APP_API_URL}/sign_up`, data)
      .then(res => {
        Authentication.setData(res.data.data);
        dispatch(signupFulfilled(res.data));
        dispatch(otpChangeDispatcher(""));
        dispatch(phoneChangeDispatcher(""));
        afterSignupNavigation();
      })
      .catch(err => {
        Authentication.removeToken("coursePortalAuthData");
        dispatch(signupRejected(err.response.data));
        Util.errorToast(err.response.data.messages[0]);
      });
  };
};

export const phoneChangeDispatcher = phone => {
  return dispatch => {
    dispatch(phoneChanged(phone));
  };
};

export const signupFormChangedDispatcher = (attr, value) => {
  return dispatch => {
    dispatch(signupFormChanged(attr, value));
  };
};

export const signupValidationDispatcher = (attr, value) => {
  return dispatch => {
    dispatch(signupValidation(attr, value));
  };
};

export const landmarkTypeChangeDispatcher = id => {
  return dispatch => {
    dispatch(landmarkTypeChanged(id));
  };
};
