import history from "src/history";

class Authentication {
  setData = data => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem("coursePortalAuthData", JSON.stringify(data));
        resolve();
      } catch (error) {
        console.log("Local storage save error: " + error.message);
        reject(error);
      }
    });
  };

  removeToken = () => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem("coursePortalAuthData");
        resolve();
      } catch (error) {
        reject(error.message);
      }
    });
  };

  isAuthenticated = () => {
    return this.getAuthToken() ? true : false;
  };

  getAuthData = () => {
    try {
      return JSON.parse(localStorage.getItem("coursePortalAuthData"));
    } catch (error) {
      console.log("Local Storage get error: " + error.message);
    }
  };

  getAuthToken = () => {
    const authData = this.getAuthData();
    if (!authData) {
      return false;
    } else {
      return authData.auth_token;
    }
  };

  logoutHandler = () => {
    this.removeToken()
      .then(() => {
        history.push("/login");
      })
      .catch(err => {});
  };

  pageNotFoundHandler = () => {
    history.push("/pageNotFound");
  };
}

export default new Authentication();
