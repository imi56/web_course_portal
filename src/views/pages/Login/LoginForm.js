import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Segment,
  Grid,
  Header,
  Message,
  Button,
} from "semantic-ui-react";
import { fv } from "classes/common";
import Authentication from "src/helpers/Authentication";
import PhoneWithGetOtp from "components/inputs/PhoneWithGetOtp";
import Otp from "components/inputs/Otp";
import "assets/css/pages/login.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneValidation: {},
      otpValidation: {},
      disableGetOtp: true,
    };
  }

  componentWillMount() {
    if (Authentication.isAuthenticated()) {
      this.props.history.push("/");
    }
  }

  afterLoginNavigation = () => {
    let to = "/";
    if (this.props.location.state) {
      to = this.props.location.state.from.pathname;
    }
    this.props.history.push(to);
  };

  phoneChangeHandler = (e) => {
    const phone = e.target.value.trim();
    this.props.phoneChangeDispatcher(phone);
    this.validatePhone(phone);
  };

  otpChangeHandler = (e) => {
    const password = e.target.value.trim();
    this.props.otpChangeDispatcher(password);
    this.validateOtp(password);
  };

  validatePhone = (phone = "") => {
    const result = fv.validatePhone(phone);
    this.setState({ phoneValidation: result, disableGetOtp: result.isInvalid });
  };

  validateOtp = (otp = "") => {
    const result = fv.validateOtp(otp);
    this.setState({ otpValidation: result });
  };

  validateForm = () => {
    return new Promise((resolve) => {
      this.validatePhone(this.props.login.phone);
      this.validateOtp(this.props.otp.password);
      const isPhoneInvalid = this.state.phoneValidation.isInvalid;
      const isOtpInvalid = this.state.otpValidation.isInvalid;
      resolve(this.isInvalid(isPhoneInvalid) || this.isInvalid(isOtpInvalid));
    });
  };

  isInvalid = (value) => {
    return value || value == undefined;
  };

  sendOtpHandler = (event) => {
    this.props.sendOtpAPI({
      phone: this.props.login.phone,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.validateForm().then((error) => {
      if (!error) {
        this.props.loginAPI(
          {
            phone: this.props.login.phone,
            otp: this.props.otp.password,
          },
          this.afterLoginNavigation
        );
      }
    });
  };

  render() {
    let pending = this.props.login.pending;
    return (
      <div className="login-form">
        <Grid stackable verticalAlign="middle">
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            <Message attached={true}>
              <Header as="h3" color="grey" textAlign="center">
                Login Securly
            </Header>
            </Message>
            <Form size="large" widths="equal">
              <Segment>
                <PhoneWithGetOtp
                  phone={this.props.login.phone}
                  phoneChangeHandler={this.phoneChangeHandler}
                  isInvalid={this.state.phoneValidation.isInvalid}
                  disableGetOtp={this.state.disableGetOtp}
                  sendOtpHandler={this.sendOtpHandler}
                  errorMsg={this.state.phoneValidation.error}
                />
                <Otp
                  password={this.props.otp.password}
                  otpChangeHandler={this.otpChangeHandler}
                  isInvalid={this.state.otpValidation.isInvalid}
                  errorMsg={this.state.otpValidation.error}
                />

                <Button
                  onClick={this.submitHandler}
                  basic
                  fluid
                  color="black"
                  size="large"
                  loading={pending}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message warning>
              New to portal? <a href="signup">Sign Up </a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

LoginForm.protoType = {
  phoneChangeDispatcher: PropTypes.func.isRequired,
  otpChangeDispatcher: PropTypes.func.isRequired,
  loginAPI: PropTypes.func.isRequired,
  sendOtpAPI: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
  otp: PropTypes.object.isRequired,
};
