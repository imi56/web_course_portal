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
        <Placeholder>
          <Placeholder.Header>
            <Placeholder.Line length="medium" />
            <Placeholder.Line length="very short" />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
          </Placeholder.Paragraph>

          <Placeholder.Paragraph>
            <Placeholder.Line length="long" />
            <Placeholder.Line length="long" />
          </Placeholder.Paragraph>

          <Placeholder.Paragraph>
            <Placeholder.Line length="full" />
            <Placeholder.Line length="full" />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
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
