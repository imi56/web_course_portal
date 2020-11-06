class FormValidation {
  isEmpty = (data) => {
    if (typeof data === "object") {
      if (JSON.stringify(data) === "{}" || JSON.stringify(data) === "[]") {
        return true;
      } else if (!data) {
        return true;
      }
      return false;
    } else if (typeof data === "string") {
      if (!data.trim()) {
        return true;
      }
      return false;
    } else if (typeof data === "undefined") {
      return true;
    } else {
      return false;
    }
  };

  // Phone Validation
  validatePhone = (phone = "") => {
    let isInvalid = false;
    let error = null;
    const regex = /^\d{10}$/;
    if (phone.length != 10) {
      isInvalid = true;
      error = "Please enter 10 digit phone number";
    } else if (!phone.match(regex)) {
      isInvalid = true;
      error = "Please enter a valid phone number";
    }
    return {
      isInvalid: isInvalid,
      error: error,
    };
  };

  // OTP Validation
  validateOtp = (otp = "") => {
    let isInvalid = false;
    let error = null;
    const regex = /^\d{6}$/;
    if (otp.length != 6) {
      isInvalid = true;
      error = "Please enter 6 digit OTP";
    } else if (!otp.match(regex)) {
      isInvalid = true;
      error = "Please enter a valid OTP";
    }
    return {
      isInvalid: isInvalid,
      error: error,
    };
  };

  // Email Validation
  validateEmail = (email = "") => {
    let isInvalid = false;
    let error = null;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(regex)) {
      isInvalid = true;
      error = "Please enter a valid email";
    }
    return {
      isInvalid: isInvalid,
      error: error,
    };
  };

  validateName = (value = "") => {
    let isInvalid = false;
    let error = null;
    if (value.length < 1) {
      isInvalid = true;
      error = "Please enter name";
    }

    return {
      isInvalid: isInvalid,
      error: error,
    };
  };

  validateRequiredInput = (
    value = "",
    fieldName = "This field",
    full_error = null,
    strictRegexValidation = true,
    regexValidation = true,
  ) => {
    let isInvalid = false;
    let error = null;
    if (this.isEmpty(value)) {
      isInvalid = true;
      error = `${fieldName} is required`;
      if (full_error) {
        error = full_error;
      }
    } else if (regexValidation && strictRegexValidation) {
      let regexValidationResult = this.stringStrictRegexValidation(value, fieldName);
      if (regexValidationResult.isInvalid) {
        isInvalid = true;
        error = regexValidationResult.error;
      }
    }
    else if (regexValidation && !strictRegexValidation) {
      let regexValidationResult = this.stringRegexValidation(value, fieldName);
      if (regexValidationResult.isInvalid) {
        isInvalid = true;
        error = regexValidationResult.error;
      }
    }
    return {
      isInvalid: isInvalid,
      error: error,
    };
  };

  stringRegexValidation = (value = "", fieldName = "This field") => {
    let error = null;
    let isInvalid = false;
    if (!value.match(/^[a-zA-Z0-9,.&' _?-@%()/]*$/)) {
      isInvalid = true;
      error = `${fieldName} can't have special characters`;
    }
    return {
      isInvalid: isInvalid,
      error: error,
    };
  };

  stringStrictRegexValidation = (value = "", fieldName = "This field") => {
    let error = null;
    let isInvalid = false;
    if (!value.match(/^[a-zA-Z0-9,.&' _?]*$/)) {
      isInvalid = true;
      error = `${fieldName} can't have special characters`;
    }
    return {
      isInvalid: isInvalid,
      error: error,
    };
  };

}

export default new FormValidation();
