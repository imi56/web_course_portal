import {
  LOGOUT,
} from "./constants";

const intialState = {
  pending: false,
  success: false,
  errors: null,
};

const getNotificationsReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGOUT: {
      return {
        ...state,
        notifications: [],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default getNotificationsReducer;
