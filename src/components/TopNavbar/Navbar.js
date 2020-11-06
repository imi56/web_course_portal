import React, { Component } from "react";
import { Menu, Segment, Dropdown } from "semantic-ui-react";
import {
  isBrowser
} from "react-device-detect";
import Authentication from "src/helpers/Authentication";

class TopNavbar extends Component {
  constructor(props) {
    super(props);
  }
  logoutHandler = () => {
    Authentication.removeToken()
      .then(() => {
        this.props.logoutDispatcher();
        this.loginNavigation();
      })
      .catch((error_msg) => {
        console.log(error_msg);
      });
  };

  loginNavigation = () => {
    this.props.history.push("/login");
  };

  isActive = (path) => {
    const pathname = this.props.location.pathname;
    if (path === "" && pathname === "/") {
      return true;
    } else {
      return pathname.indexOf(path) > 0 ? true : false;
    }
  };

  handleItemClick = (e, { path }) => {
    this.props.history.push(`/${path}`);
  };

  render() {
    let data = this.props.data;
    return (
      <Segment inverted>
        <Menu stackable inverted pointing={isBrowser} secondary={isBrowser}>
          <Menu.Item
            name="Home"
            path=""
            active={this.isActive("")}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Dropdown item icon="user" direction="left">
              <Dropdown.Menu>
                <Dropdown.Item onClick={this.logoutHandler}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Segment>

    );
  }
}

export default TopNavbar;
