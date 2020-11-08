import React from "react";
import { Rating} from "semantic-ui-react";

const CustomRating = (props) => {
  const ratingChangeHandler = (e, { rating, maxRating }) => {
    e.stopPropagation();
    props.createRatingAPI({
      id: props.id,
      product_id: props.prod_id,
      rating: rating
    });
    console.log(rating, props.prod_id);
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
