import React from "react";
import { Rating} from "semantic-ui-react";

const CustomRating = (props) => {
  const ratingChangeHandler = (e, { rating, maxRating }) => {
    const prodId = props.prod_id;
    e.stopPropagation();
    props.createRatingAttrChangeDispatcher("currentlyRatingProductId", prodId)
    props.createRatingAPI({
      id: props.id,
      product_id: prodId,
      rating: rating
    });
  };
  
  return (
      <Rating 
        maxRating={5} 
        onRate={ratingChangeHandler} 
        defaultRating={props.rating}
        value={props.rating}
        icon="star"
      />
  );
};

export default CustomRating;
