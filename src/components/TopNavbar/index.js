import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  logoutDispatcher,
} from "./actionCreators";
import { withRouter } from "react-router-dom";

import Navbar from "./Navbar";

const mapStatesToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logoutDispatcher,
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStatesToProps, mapDispatchToProps)(Navbar)
);
