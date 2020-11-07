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
import "assets/css/pages/login.css";
import Otp from "components/inputs/Otp";
import TextBox from "components/inputs/TextBox";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneValidation: {},
      otpValidation: {},
      nameValidation: {},
      disableGetOtp: true,
      orgNameLabel: "Name",
    };
  }

  componentWillMount() {
    if (Authentication.isAuthenticated()) {
      this.props.history.push("/");
    }
  }

  afterSignupNavigation = () => {
    this.props.history.push("/");
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

  validateName = (result = {}) => {
    this.setState({
      nameValidation: result,
    });
  };

  isError = () => {
    this.validatePhone(this.props.signup.phone);
    this.validateOtp(this.props.otp.password);
    this.validateName(
      fv.validateRequiredInput(
        this.props.signup.name,
        this.state.orgNameLabel
      )
    );

    const isPhoneInvalid = this.state.phoneValidation.isInvalid;
    const isOtpInvalid = this.state.otpValidation.isInvalid;
    const isNameInvalid = this.state.nameValidation.isInvalid;
    return (
      this.isInvalid(isPhoneInvalid) ||
      this.isInvalid(isOtpInvalid) ||
      this.isInvalid(isNameInvalid)
    );
  };

  isInvalid = (value) => {
    return value || value == undefined;
  };

  sendOtpHandler = (event) => {
    this.props.sendOtpAPI({
      phone: this.props.signup.phone,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const error = this.isError();
    if (!error) {
      const data = this.props.signup;
      this.props.signupAPI(
        {
          phone: data.phone,
          name: data.name.trim(),
          otp: this.props.otp.password,
        },
        this.afterSignupNavigation
      );
    }
  };

  render() {
    let pending = this.props.signup.pending;
    return (
      <div className="login-form">
        <Grid stackable verticalAlign="middle">
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            <Message attached>
              <Header as="h3" color="grey" textAlign="center">
                Sign up Securly
            </Header>
            </Message>
            <Form size="large">
              <Segment>
                <PhoneWithGetOtp
                  phone={this.props.signup.phone}
                  phoneChangeHandler={this.phoneChangeHandler}
                  isInvalid={this.state.phoneValidation.isInvalid}
                  disableGetOtp={this.state.disableGetOtp}
                  sendOtpHandler={this.sendOtpHandler}
                  errorMsg={this.state.phoneValidation.error}
                />
                <TextBox
                  label={this.state.orgNameLabel}
                  placeholder="Enter your name"
                  value={this.props.signup.name}
                  maxLength={50}
                  attr="name"
                  changeDispatcher={this.props.signupFormChangedDispatcher}
                  validateField={fv.validateRequiredInput}
                  validationDispatcher={this.validateName}
                  validationResult={this.state.nameValidation}
                  required={true}
                  regexValidation={true}
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
                  Sign up
                </Button>
              </Segment>
            </Form>
            <Message warning>
              Already registered? <a href="login">Login </a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

SignupForm.propTypes = {
  phoneChangeDispatcher: PropTypes.func.isRequired,
  otpChangeDispatcher: PropTypes.func.isRequired,
  signupFormChangedDispatcher: PropTypes.func.isRequired,
  signup: PropTypes.object.isRequired,
  otp: PropTypes.object.isRequired,
};
