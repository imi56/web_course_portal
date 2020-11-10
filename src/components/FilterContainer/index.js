import React from "react";
import PropTypes from "prop-types";
import Chip from "./Chip";
import { Menu, Icon, Header } from "semantic-ui-react";

const FilterChips = props => {
  return Object.entries(props.displayFilters).map(filterData => (
    <Chip
      filterChangeDispatcher={props.filterChangeDispatcher}
      key={filterData[0]}
      filterData={filterData}
      callbackAPI={props.callbackAPI}
      filters={props.filters}
    />
  ));
};

const Index = props => {
  return (
    <Menu fluid vertical>
      <Menu.Item name="filter">
        <Header as='h5'>
          <Icon name='filter' />
          <Header.Content>Active Filters</Header.Content>
        </Header>
      </Menu.Item>
      <Menu.Item className="min-height-50">
        <FilterChips
          filterChangeDispatcher={props.filterChangeDispatcher}
          displayFilters={props.displayFilters}
          callbackAPI={props.callbackAPI}
          filters={props.filters}
        />
      </Menu.Item>
    </Menu>
  );
};

Index.propTypes = {
  displayFilters: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  callbackAPI: PropTypes.func.isRequired,
  filterChangeDispatcher: PropTypes.func.isRequired
};

export default Index;
