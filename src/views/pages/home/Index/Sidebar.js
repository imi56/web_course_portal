import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import FilterContainer from "components/FilterContainer";

const Sidebar = (props) => {
  const filterChangeHandler = (e, { name, value }) => {
    if (props.filters[name] !== value) {
      let filters = { ...props.filters };
      filters[name] = value;
      props.filterChangeDispatcher(name, value, e.target.textContent);
      props.getProductsAPI(filters);
    }
  };
  
  const formOptions = (options = []) => {
    return options.map((o) => ({ text: o, value: o, key: o }));
  };

  return (
    <div >
      <FilterContainer
        filterChangeDispatcher={props.filterChangeDispatcher}
        displayFilters={props.displayFilters}
        callbackAPI={props.getProductsAPI}
        filters={props.filters}
      />

      <Menu fluid stackable vertical>
        <Menu.Item name="filter">
          <b>Filter By</b>
        </Menu.Item>
        <Menu.Item>
          <div>Provider</div>
          <Dropdown
            className="margin-top-5"
            name="provider"
            value={props.filters.provider}
            fluid
            placeholder="Select Provider"
            selection
            options={formOptions(props.providers)}
            onChange={filterChangeHandler}
          />
        </Menu.Item>

        <Menu.Item>
          <div>Type</div>
          <Dropdown
            className="margin-top-5"
            name="type"
            value={props.filters.type}
            fluid
            placeholder="Select Type"
            selection
            options={formOptions(props.types)}
            onChange={filterChangeHandler}
          />
        </Menu.Item>

        
       </Menu>
     </div>
  );
};

export default Sidebar;
