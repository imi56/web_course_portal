import {
  CREATE_RATING_FULFILLED,
  CREATE_RATING_PENDING,
  CREATE_RATING_REJECTED
} from "./constants";
const intialState = {
  pending: false,
  success: false,
  errors: null,
  data: {}
};

const createRatingReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_RATING_PENDING: {
      return {
        ...state,
        pending: true
      };
    }
    case CREATE_RATING_FULFILLED: {
      return {
        ...state,
        pending: false,
        success: true,
        errors: null,
        data: action.payload.data
      };
    }
    case CREATE_RATING_REJECTED: {
      return {
        ...state,
        pending: false,
        success: false,
        errors: action.payload,
        data: {}
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};

export default createRatingReducer;
