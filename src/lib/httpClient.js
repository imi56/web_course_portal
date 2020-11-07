import axios from "axios";
import Authentication from "src/helpers/Authentication";
import { Util } from "classes/common";

class HttpClient {
  constructor() {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }
  request = (method, url = "", data = {}, authorize = true) => {
    if(authorize)
      this.setAuthorizationHeader(url);
    return axios({
      method: method,
      url: url,
      data: data
    })
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        if (err.response.status == 419 || err.response.status == 401) {
          Authentication.logoutHandler();
        }
        if (err.response.status == 403) {
          Authentication.pageNotFoundHandler();
        } else if (err.response.status == 500) {
          Util.errorToast(
            "Something is broken at our end, we will resolve this soon"
          );
        }
        return Promise.reject(err);
      });
  };

  setAuthorizationHeader = url => {
    axios.defaults.headers.common[
      "Authorization"
    ] = Authentication.getAuthToken();
  };
}

export default new HttpClient();
