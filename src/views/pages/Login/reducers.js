import {
  LOGIN_PENDING,
  LOGIN_FULFILLED,
  LOGIN_REJECTED,
  PHONE_CHANGED
} from "./constants";
const intialState = {
  pending: false,
  success: false,
  authToken: null,
  errors: null,
  phone: ""
};

const loginReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING: {
      return {
        ...state,
        pending: true
      };
    }
    case LOGIN_FULFILLED: {
      return {
        ...state,
        pending: false,
        success: true,
        errors: null,
        authToken: action.payload.data.auth_token
      };
    }
    case LOGIN_REJECTED: {
      return {
        ...state,
        pending: false,
        success: false,
        authToken: null,
        errors: action.payload
      };
    }
    case PHONE_CHANGED: {
      return {
        ...state,
        phone: action.phone
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};

export default loginReducer;
