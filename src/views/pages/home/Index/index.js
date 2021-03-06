import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { 
  getProductsAPI, 
  getProductsAttrChangeDispatcher,
  productFilterChangeDispatcher,
 } from "./actionCreators";
import { 
  createRatingAPI, 
  createRatingAttrChangeDispatcher,
} from "../Rating/actionCreators";
import Container from "./Container";

const makeMapStateToProps = () => {
  const mapStateToProps = state => {
    return {
      response: state.getProducts,
      ratingResponse: state.createRating,
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProductsAPI,
      getProductsAttrChangeDispatcher,
      createRatingAPI,
      createRatingAttrChangeDispatcher,
      productFilterChangeDispatcher,
    },
    dispatch
  );
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Container);
