import {
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  PHONE_CHANGED
} from "./constants";

export const loginPending = () => {
  return {
    type: LOGIN_PENDING
  };
};

export const loginFulfilled = payload => {
  return {
    type: LOGIN_FULFILLED,
    payload
  };
};

export const loginRejected = payload => {
  return {
    type: LOGIN_REJECTED,
    payload
  };
};

export const phoneChanged = phone => {
  return {
    type: PHONE_CHANGED,
    phone
  };
};
