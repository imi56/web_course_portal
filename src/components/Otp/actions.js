import {
  SEND_OTP_PENDING,
  SEND_OTP_FULFILLED,
  SEND_OTP_REJECTED,
  OTP_CHANGED
} from "./constants";

export const sendOtpPending = () => {
  return {
    type: SEND_OTP_PENDING
  };
};

export const sendOtpFulfilled = payload => {
  return {
    type: SEND_OTP_FULFILLED,
    payload
  };
};

export const sendOtpRejected = payload => {
  return {
    type: SEND_OTP_REJECTED,
    payload
  };
};

export const otpChanged = password => {
  return {
    type: OTP_CHANGED,
    password
  };
};
