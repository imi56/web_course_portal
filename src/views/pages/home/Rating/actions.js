import {
  CREATE_RATING_FULFILLED,
  CREATE_RATING_PENDING,
  CREATE_RATING_REJECTED,
  CREATE_RATING_ATTR_CHANGED,
} from "./constants";

export const createRatingPending = () => {
  return {
    type: CREATE_RATING_PENDING
  };
};

export const createRatingFulfilled = payload => {
  return {
    type: CREATE_RATING_FULFILLED,
    payload
  };
};

export const createRatingRejected = payload => {
  return {
    type: CREATE_RATING_REJECTED,
    payload
  };
};

export const createRatingAttrChanged = (attr, value) => {
  return {
    type: CREATE_RATING_ATTR_CHANGED,
    payload: { attr: attr, value: value },
  };
};
