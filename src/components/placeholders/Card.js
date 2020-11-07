import React from "react";
import { Placeholder, Segment, Grid } from "semantic-ui-react";

const CardPlaceholders = props => (
  <div>
    <CardPlaceholder concernsCount={props.concernsCount} />
  </div>
);

const PlaceholderHeader = props => {
  return props.concernsCountArr.map((elem, idx) => (
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
  const concernsCountArr = [...Array(props.concernsCount).keys()];
  return (
    <Grid columns={1} stackable>
      <PlaceholderHeader concernsCountArr={concernsCountArr} />
    </Grid>
  );
};

export default CardPlaceholders;
