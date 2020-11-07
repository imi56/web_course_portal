import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductsAPI } from "./actionCreators";
import Container from "./Container";

const makeMapStateToProps = () => {
  const mapStateToProps = state => {
    return {
      data: state.getProducts,
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProductsAPI
    },
    dispatch
  );
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Container);
