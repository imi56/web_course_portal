import React from "react";
import { Placeholder, Segment, Grid, Message } from "semantic-ui-react";

const CardPlaceholders = props => {
  
  return (
    !props.pending && props.resultCount == 0 ? ( 
      <Message info>
        <Message.Header>No results found</Message.Header>
        <p>Try changing filters</p>
      </Message>
    ) : (
      <CardPlaceholder productCount={props.productCount} />
    )
  )
  
}

const PlaceholderHeader = props => {
  return props.productCountArr.map((elem, idx) => (
    <Grid.Column key={idx}>
      <Segment raised>
        <Placeholder fluid>
      <Placeholder.Paragraph>
        <PlaceholderLines lineCount={9} />
      </Placeholder.Paragraph>
    </Placeholder>
      </Segment>
    </Grid.Column>
  ));
};

const PlaceholderLines = props => {
  const lineCounttArr = [...Array(props.lineCount).keys()];
  return lineCounttArr.map((elem, idx) => (
     <Placeholder.Line key={idx} />
  ));
};


const CardPlaceholder = props => {
  const productCountArr = [...Array(props.productCount).keys()];
  return (
    <Grid columns={1} stackable>
      <PlaceholderHeader productCountArr={productCountArr} />
    </Grid>
  );
};

export default CardPlaceholders;
