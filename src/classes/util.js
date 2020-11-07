import { toast } from "react-toastify";

class Util {
  test = () => {
    alert("Util");
  };

  errorToast = (msg = "") => {
    toast.error(msg, {
      position: "bottom-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  successToast = (msg = "") => {
    toast.success(msg, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  infoToast = (msg = "") => {
    toast.info(msg, {
      position: "bottom-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  convertToUrlParams = (obj) => {
    return Object.keys(obj)
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
      })
      .join("&");
  };

  trimText = (string, length) => {
    if(string.length >= length - 4) {
      string = string.substring(0, length-4);
      string += " ...";
    }
    return string;
  };

  sanitizeFilter = (filters = {}) => {
    const copyFilter = Object.assign({}, filters);
    Object.keys(copyFilter).map((key, index) => {
      copyFilter[key] = copyFilter[key] == 0 ? "" : copyFilter[key];
    });
    return copyFilter;
  };
}

export default new Util();
