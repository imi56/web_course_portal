import {
  logoutHandler,
} from "./actions";


export const logoutDispatcher = () => {
  return (dispatch) => {
    dispatch(logoutHandler());
  };
};
