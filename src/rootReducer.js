import { combineReducers } from "redux";
import loginReducer from "pages/Login/reducers";
import signupReducer from "pages/Signup/reducers";
import sendOtpReducer from "components/Otp/reducers";


const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  otp: sendOtpReducer,
});

export default rootReducer;
