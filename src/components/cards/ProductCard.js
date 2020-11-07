import React from "react";
import { Card, Grid, Image, Header, Label, Icon } from "semantic-ui-react";
import { Util } from "classes/common";

import "assets/css/card.css";

const CardBody = (props) => {
  const prod = props.prod;
  return (
    <Card.Content>
       <Grid centered stackable>
        <Grid.Row>
          <Grid.Column width="5" >
            <Image src={prod.image_url} />
            </Grid.Column>
          <Grid.Column width="9">
            <div className="card-div">
              <Header as="h3">
                <Header.Content>
                  {prod.title}
                  <Header.Subheader>{Util.trimText(prod.description, 165)}</Header.Subheader>
                </Header.Content>
              </Header>
              <Header>
                Offered by:  <Label color="orange">{prod.provider}</Label>
              </Header>
              <Header>
              Type: 
              <Label as='a'>
                <Icon name='book' /> {prod.type || "N/A"}
              </Label>
              </Header>
            </div>
          </Grid.Column>
          <Grid.Column width="2" textAlign="right"> 
            <Header as="h3">
                <Header.Content>
                 Price
                  <Header.Subheader>{prod.price || "N/A"}</Header.Subheader>
                </Header.Content>
            </Header>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Card.Content>
  );
};

const ConcernCard = (props) => {
  const prod = props.prod;
  return (
    <div className="card margin-bottom-15" >
      <Card raised fluid>
        <CardBody prod={prod}/>
      </Card>
    </div>
  );
};

export default ConcernCard;
