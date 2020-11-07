import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProductsAPI, getProductsAttrChangeDispatcher } from "./actionCreators";
import Container from "./Container";

const makeMapStateToProps = () => {
  const mapStateToProps = state => {
    return {
      response: state.getProducts,
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProductsAPI,
      getProductsAttrChangeDispatcher,
    },
    dispatch
  );
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Container);
