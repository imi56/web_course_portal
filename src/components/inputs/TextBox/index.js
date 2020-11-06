
import React from "react";
import { Form, Input } from "semantic-ui-react";
import PropTypes from "prop-types";

const TextBox = (props) => {
  const changeHandler = (e, { value }) => {
    let regexValidation = props.regexValidation || false;
    props.changeDispatcher(props.attr, value);
    validateValue(value, regexValidation);
  };

  const validateValue = (value = "", regexValidation = false) => {
    const result = props.validateField(value, props.label, null, regexValidation);
    props.validationDispatcher(result);
  };

  return (
    <Form.Field
      required={props.required}
      error={props.validationResult.isInvalid}
      className={props.class}
    >
      <label>{props.label}</label>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={changeHandler}
        maxLength={props.maxLength}
        fluid
      />
      {props.validationResult.isInvalid && (
        <small className="error">{props.validationResult.error}</small>
      )}
    </Form.Field>
  );
};

TextBox.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  validationResult: PropTypes.object.isRequired,
  required: PropTypes.bool.isRequired,
  fluid: PropTypes.bool,
  validationDispatcher: PropTypes.func.isRequired,
  changeDispatcher: PropTypes.func.isRequired,
  attr: PropTypes.string.isRequired,
  validateField: PropTypes.func.isRequired,
};

export default TextBox;
