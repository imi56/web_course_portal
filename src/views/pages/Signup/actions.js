import {
  SIGNUP_PENDING,
  SIGNUP_FULFILLED,
  SIGNUP_REJECTED,
  PHONE_CHANGED,
  ORG_NAME_CHANGED,
  SIGNUP_FORM_CHANGED,
  SIGNUP_VALIDATION,
  LANDMARK_TYPE_CHANGED
} from "./constants";

export const signupPending = () => {
  return {
    type: SIGNUP_PENDING
  };
};

export const signupFulfilled = payload => {
  return {
    type: SIGNUP_FULFILLED,
    payload
  };
};

export const signupRejected = payload => {
  return {
    type: SIGNUP_REJECTED,
    payload
  };
};

export const phoneChanged = phone => {
  return {
    type: PHONE_CHANGED,
    phone
  };
};

export const landmarkNameChanged = name => {
  return {
    type: ORG_NAME_CHANGED,
    name
  };
};

export const signupFormChanged = (attr, value) => {
  return {
    type: SIGNUP_FORM_CHANGED,
    payload: { attr: attr, value: value }
  };
};

export const signupValidation = (attr, value) => {
  return {
    type: SIGNUP_VALIDATION,
    payload: { attr: attr, value: value }
  };
};

export const landmarkTypeChanged = id => {
  return {
    type: LANDMARK_TYPE_CHANGED,
    id
  };
};
