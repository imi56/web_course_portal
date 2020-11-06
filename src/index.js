import React, { Component } from "react";
import ReactDOM from "react-dom";
import IndexRoutes from "routes/IndexRoutes";
import "semantic-ui-css/semantic.min.css";
import "assets/css/common.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <>
        <IndexRoutes />
        <ToastContainer
          position="bottom-center"
          autoClose={80000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
module.hot.accept();
