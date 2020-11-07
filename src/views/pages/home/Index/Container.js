import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "assets/css/card.css";
import CardPlaceholder from "components/placeholders/Card";
import ProductCard from "components/cards/ProductCard";



class Container extends Component {
  constructor(props) {
    super(props);
    this.props.getProductsAPI();
  }
  render() {
    const data = this.props.data;
    let CardList = (props) => {
      return !data.pending ? (
        props.products.map((prod) => (
          <ProductCard
            key={prod.id}
            prod={prod}
          />
        ))
      ) : (
          <CardPlaceholder />
        );
    };

    return (
      <Grid centered stackable>
        <Grid.Row>
          <Grid.Column computer={3} mobile={4} />
          <Grid.Column computer={10} mobile={4}>
            <CardList
              products={this.props.data.products || []}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Container;
