import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import CardPlaceholder from "components/placeholders/Card";
import ProductCard from "components/cards/ProductCard";
import {PER_PAGE_PRODUCTS} from "./constants";
import Pagination from "components/Pagination";
import Sidebar from "./Sidebar";

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
            createRatingAPI={props.createRatingAPI}
            createRatingAttrChangeDispatcher={props.createRatingAttrChangeDispatcher}
            updatingProd={props.updatingProd}
          />
        ))
      ) : (
          <CardPlaceholder productCount={PER_PAGE_PRODUCTS} />
        );
    };
    
    return (
      
      <Grid centered stackable>
        <Grid.Row>
          <Grid.Column computer={4} mobile={4}>
            <div className="card d-margin-left-50">
              <Sidebar
                filterChangeDispatcher={
                  this.props.productFilterChangeDispatcher
                }
                getProductsAPI={this.props.getProductsAPI}
                filters={response.filters}
                displayFilters={response.displayFilters}
                attrChangeDispatcher={
                  this.props.getProductsAttrChangeDispatcher
                }
                providers={response.providers}
                types={response.types}
              />
            </div>
          </Grid.Column>
          <Grid.Column computer={9} mobile={4}>
            <CardList
              products={response.products || []}
              createRatingAPI={this.props.createRatingAPI}
              createRatingAttrChangeDispatcher={this.props.createRatingAttrChangeDispatcher}
              updatingProd={this.props.ratingResponse.currentlyRatingProductId}
            />

            {!response.pending && response.products.length > PER_PAGE_PRODUCTS && (
              <Pagination
                filters={response.filters}
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
