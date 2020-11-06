import axios from "axios";
import {
  loginPending,
  loginFulfilled,
  loginRejected,
  phoneChanged
} from "./actions";
import { otpChangeDispatcher } from "components/Otp/actionCreators";
import { Util } from "classes/common";

import Authentication from "src/helpers/Authentication";

export const loginAPI = (data, afterLoginNavigation) => {
  return dispatch => {
    dispatch(loginPending());
    return axios
      .post(`${process.env.REACT_APP_API_URL}/login`, data)
      .then(res => {
        Authentication.removeToken("coursePortalAuthData")
          .then(() => {
            Authentication.setData(res.data.data)
              .then(() => {
                dispatch(loginFulfilled(res.data));
                dispatch(otpChangeDispatcher(""));
                dispatch(phoneChangeDispatcher(""));
                afterLoginNavigation();
              })
              .catch(error => {
                console.log(error);
              });
          })
          .catch(err => {
            console.log("login error", err);
          });
      })
      .catch(err => {
        Authentication.removeToken("coursePortalAuthData");
        dispatch(loginRejected(err.response.data));
        Util.errorToast(err.response.data.messages[0]);
      });
  };
};

export const phoneChangeDispatcher = phone => {
  return dispatch => {
    dispatch(phoneChanged(phone));
  };
};
