import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Container from "./Container";

const makeMapStateToProps = () => {
  const mapStateToProps = state => {
    return {
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
    },
    dispatch
  );
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Container);
