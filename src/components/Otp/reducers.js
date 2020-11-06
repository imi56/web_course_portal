import {
  SEND_OTP_PENDING,
  SEND_OTP_FULFILLED,
  SEND_OTP_REJECTED,
  OTP_CHANGED
} from "./constants";
const intialState = {
  pending: false,
  success: false,
  password: "",
  errors: null
};

const sendOtpReducer = (state = intialState, action) => {
  switch (action.type) {
    case SEND_OTP_PENDING: {
      return {
        ...state,
        pending: true
      };
    }
    case SEND_OTP_FULFILLED: {
      return {
        ...state,
        pending: false,
        success: true,
        errors: null,
        password: action.payload.data.password
      };
    }
    case SEND_OTP_REJECTED: {
      return {
        ...state,
        pending: false,
        success: false,
        password: "",
        errors: action.payload
      };
    }
    case OTP_CHANGED: {
      return {
        ...state,
        password: action.password
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default sendOtpReducer;
