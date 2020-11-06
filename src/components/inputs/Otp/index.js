import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "semantic-ui-react";
const Otp = (props) => {
  return (
    <Form.Field required error={props.isInvalid}>
      <label>OTP</label>
      <Input
        placeholder="Enter OTP"
        value={props.password}
        onChange={props.otpChangeHandler}
        maxLength={6}
      />
      {props.isInvalid && <small className="error">{props.errorMsg}</small>}
    </Form.Field>
  );
};

Otp.propTypes = {
  error: PropTypes.bool,
  password: PropTypes.string.isRequired,
  otpChangeHandler: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  isInvalid: PropTypes.bool,
};

export default Otp;
