import httpClient from "lib/httpClient";
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
    httpClient
      .request("post", "login", data, false)
      .then(res => {
        Authentication.removeToken("coursePortalAuthData").then(() => {
          Authentication.setData(res.data).then(() => {
            dispatch(loginFulfilled(res));
            dispatch(otpChangeDispatcher(""));
            dispatch(phoneChangeDispatcher(""));
            afterLoginNavigation();
          }).catch(error => {
              console.log(error);
          });
        })
      }).catch((err) => {
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
