import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginAPI, phoneChangeDispatcher } from "./actionCreators";
import { sendOtpAPI, otpChangeDispatcher } from "components/Otp/actionCreators";
import LoginForm from "./LoginForm";

const mapStatesToProps = state => {
  return {
    login: state.login,
    otp: state.otp
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loginAPI: loginAPI,
      sendOtpAPI: sendOtpAPI,
      otpChangeDispatcher: otpChangeDispatcher,
      phoneChangeDispatcher: phoneChangeDispatcher
    },
    dispatch
  );
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(LoginForm);
