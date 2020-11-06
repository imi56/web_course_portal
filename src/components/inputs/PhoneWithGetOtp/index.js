import React from "react";
import { Component } from "react";

import PropTypes from "prop-types";
import { Form, Input, Button } from "semantic-ui-react";

export default class PhoneWithGetOtp extends Component {
  constructor(props) {
    super(props);
    this.mounted = true;
    this.state = {
      disabled: false,
      otpSent: false,
      counter: 60,
    };
    this.timer;
  }

  componentWillUnmount = () => {
    this.mounted = false;
    this.setState({
      counter: 0,
    });
    if (this.timer) {
      // Yes, clear it
      clearTimeout(this.timer);
    }
  }

  render() {
    const getOTPHandler = (e) => {
      enableCounter();
      this.props.sendOtpHandler();
    };

    const enableCounter = () => {
      this.setState({
        disabled: true,
        otpSent: true,
      });
      decreaseCounter();
    };

    const decreaseCounter = () => {
      this.setState({
        counter: this.state.counter - 1,
      });
      if (this.state.counter === 0) {
        this.setState({
          disabled: false,
          counter: 60,
          otpSent: false,
        });
      } else if (this.mounted) {
        this.timer = setTimeout(decreaseCounter, 1000);
      }
    };

    return (
      <Form.Field required error={this.props.isInvalid}>
        <label>Phone</label>
        <Input
          placeholder="Enter phone no"
          value={this.props.phone}
          onChange={this.props.phoneChangeHandler}
          maxLength={10}
          action
        >
          <input />
          <Button
            onClick={getOTPHandler}
            basic
            color="black"
            disabled={this.props.disableGetOtp || this.state.disabled}
          >
            {this.state.otpSent ? `Retry in ${this.state.counter}s` : "Get OTP"}
          </Button>
        </Input>
        {this.props.isInvalid && (
          <small className="error">{this.props.errorMsg}</small>
        )}
      </Form.Field>
    );
  }
}

PhoneWithGetOtp.propTypes = {
  phone: PropTypes.string.isRequired,
  phoneChangeHandler: PropTypes.func.isRequired,
  sendOtpHandler: PropTypes.func.isRequired,
  disableGetOtp: PropTypes.bool,
  isInvalid: PropTypes.bool,
  errorMsg: PropTypes.string,
};
