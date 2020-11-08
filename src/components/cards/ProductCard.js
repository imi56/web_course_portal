import React from "react";
import { Card, Grid, Image, Header, Label, Icon } from "semantic-ui-react";
import { Util } from "classes/common";
import Rating from "components/Rating";
import "assets/css/card.css";

const CardBody = (props) => {
  const prod = props.prod;
  const fixedRatingDecimal = prod.avg_rating == 0.0 ? 0 : 1;
  
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
              <span className="rating">{prod.avg_rating.toFixed(fixedRatingDecimal)}</span> 
              <Rating 
                id={prod.user_rating.id}
                prod_id={prod.id} 
                createRatingAPI={props.createRatingAPI} 
                rating={prod.user_rating.rating} 
              /> 
              
              <Header as="h4">
                Offered by:  <Label color="orange">{prod.provider}</Label>
              </Header>
              <Header as="h4">
              Type: 
              <Label className="uc-first" as='a'>
                <Icon  name='book' /> {prod.product_type || "N/A"}
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

  const redirectUrl = () => {
    if(prod.resource_url) {
      window.open(prod.resource_url, "_blank")
    }
  }
  return (
    <div className="card margin-bottom-15" onClick={redirectUrl} >
      <Card raised fluid>
        <CardBody createRatingAPI={props.createRatingAPI} prod={prod}/>
      </Card>
    </div>
  );
};

export default ConcernCard;
