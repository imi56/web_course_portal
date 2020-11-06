import {
  LOGOUT,
} from "./constants";

export const logoutHandler = () => {
  return {
    type: LOGOUT,
  };
};
