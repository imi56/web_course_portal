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
}

export default new Util();
