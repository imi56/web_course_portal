import React from "react";
import PropTypes from "prop-types";
import { Icon, Label } from "semantic-ui-react";

const Chip = props => {
  const filterRemoveHandler = e => {
    const name = e.target.getAttribute("filter_key");
    const value = 0;
    let filters = { ...props.filters };
    filters[name] = value;
    props.callbackAPI(filters);
    props.filterChangeDispatcher(name, 0, null);
  };

  return props.filterData[1][0] == 0 ? null : (
    <span className="filter-chip">
      <Label basic as="a">
        {props.filterData[1][1]}
        <Icon
          filter_value={props.filterData[1][0]}
          filter_key={props.filterData[0]}
          onClick={filterRemoveHandler}
          name="delete"
        />
      </Label>
    </span>
  );
};

Chip.propTypes = {
  filters: PropTypes.object.isRequired,
  callbackAPI: PropTypes.func.isRequired,
  filterChangeDispatcher: PropTypes.func.isRequired
};

export default Chip;
