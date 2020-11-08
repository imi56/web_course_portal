import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import CardPlaceholder from "components/placeholders/Card";
import ProductCard from "components/cards/ProductCard";
import {PER_PAGE_PRODUCTS} from "./constants";
import Pagination from "components/Pagination";

class Container extends Component {
  constructor(props) {
    super(props);
    this.props.getProductsAPI();
  }
  render() {
    const response = this.props.response;

    const totalPages = Math.ceil(response.product_count / PER_PAGE_PRODUCTS);
    let CardList = (props) => {
      return !response.pending ? (
        response.products.map((prod) => (
          <ProductCard
            key={prod.id}
            prod={prod}
          />
        ))
      ) : (
          <CardPlaceholder concernsCount={PER_PAGE_PRODUCTS} />
        );
    };

    return (
      
      <Grid centered stackable>
        <Grid.Row>
          <Grid.Column computer={3} mobile={4} />
          <Grid.Column computer={10} mobile={4}>
            <CardList
              products={response.products || []}
            />

            {!response.pending && response.product_count > PER_PAGE_PRODUCTS && (
              <Pagination
                totalPages={totalPages}
                activePage={response.activePage}
                getDataAPI={this.props.getProductsAPI}
                perPageRecords={PER_PAGE_PRODUCTS}
                attrChangeDispatcher={
                  this.props.getProductsAttrChangeDispatcher
                }
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Container;
