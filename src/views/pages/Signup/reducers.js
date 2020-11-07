import {
  SIGNUP_PENDING,
  SIGNUP_FULFILLED,
  SIGNUP_REJECTED,
  PHONE_CHANGED,
  ORG_NAME_CHANGED,
  SIGNUP_FORM_CHANGED,
  SIGNUP_VALIDATION,
  LANDMARK_TYPE_CHANGED,
  DOMAIN_NAME_CHANGED,
} from "./constants";
const intialState = {
  pending: false,
  success: false,
  authToken: null,
  errors: null,
  phone: "",
  name: "",
  landmark_type_id: "",
  domain_name: "",
  orgNameValidation: {},
  domainNameValidation: {},
};

const signupReducer = (state = intialState, action) => {
  switch (action.type) {
    case SIGNUP_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case SIGNUP_FULFILLED: {
      return {
        ...state,
        pending: false,
        success: true,
        errors: null,
        authToken: action.payload.data.auth_token,
      };
    }
    case SIGNUP_REJECTED: {
      return {
        ...state,
        pending: false,
        success: false,
        authToken: null,
        errors: action.payload,
      };
    }
    case PHONE_CHANGED: {
      return {
        ...state,
        phone: action.phone,
      };
    }
    case ORG_NAME_CHANGED: {
      return {
        ...state,
        name: action.name,
      };
    }

    case DOMAIN_NAME_CHANGED: {
      return {
        ...state,
        domain_name: action.domain_name,
      };
    }

    case SIGNUP_FORM_CHANGED: {
      return {
        ...state,
        [action.payload.attr]: action.payload.value,
      };
    }
    case SIGNUP_VALIDATION: {
      return {
        ...state,
        [action.payload.attr]: action.payload.value,
      };
    }
    case LANDMARK_TYPE_CHANGED: {
      return {
        ...state,
        landmark_type_id: action.id,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default signupReducer;
