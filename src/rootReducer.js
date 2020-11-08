import { combineReducers } from "redux";
import loginReducer from "pages/Login/reducers";
import signupReducer from "pages/Signup/reducers";
import sendOtpReducer from "components/Otp/reducers";
import getProductsReducer from "pages/home/Index/reducers";
import createRatingReducer from "pages/home/Rating/reducers";


const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  otp: sendOtpReducer,
  getProducts: getProductsReducer,
  createRating: createRatingReducer,
});

export default rootReducer;
