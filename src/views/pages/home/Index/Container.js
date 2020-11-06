import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid centered stackable>
        <Grid.Row>
          <Grid.Column >
            Home Page
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Container;
