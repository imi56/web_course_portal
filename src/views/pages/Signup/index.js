import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  signupAPI,
  phoneChangeDispatcher,
  signupFormChangedDispatcher,
  signupValidationDispatcher,
  landmarkTypeChangeDispatcher
} from "./actionCreators";
import { sendOtpAPI, otpChangeDispatcher } from "components/Otp/actionCreators";
import SignupForm from "./SignupForm";

const mapStatesToProps = state => {
  return {
    signup: state.signup,
    otp: state.otp
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      signupAPI,
      sendOtpAPI,
      otpChangeDispatcher,
      phoneChangeDispatcher,
      signupFormChangedDispatcher,
      signupValidationDispatcher,
      landmarkTypeChangeDispatcher
    },
    dispatch
  );
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(SignupForm);
