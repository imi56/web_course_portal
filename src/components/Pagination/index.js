import React from "react";
import { Pagination, Icon, Container } from "semantic-ui-react";
import PropTypes from "prop-types";

const CustomPagination = (props) => {
  const pageChangeHandler = (e, { name, activePage }) => {
    let filters = { ...props.filters };
    const offset = (activePage - 1) * props.perPageRecords;
    filters["offset"] = offset;
    props.attrChangeDispatcher(name, activePage);
    props.getDataAPI(filters);
  };
  return (
    <Container className="margin-top-30" textAlign="center">
      <Pagination
        name="activePage"
        boundaryRange={1}
        activePage={props.activePage}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={props.totalPages}
        onPageChange={pageChangeHandler}
        ellipsisItem={{ content: <Icon color="grey" name='ellipsis horizontal' />, icon: true }}
        prevItem={{ content: <Icon name='angle left' />, icon: true }}
        nextItem={{ content: <Icon name='angle right' />, icon: true }}
      />
    </Container>
  );
};

CustomPagination.protoType = {
  attrChangeDispatcher: PropTypes.func.isRequired,
  getDataAPI: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  totalPages: PropTypes.string.isRequired,
  perPageRecords: PropTypes.number.isRequired,
};

export default CustomPagination;
