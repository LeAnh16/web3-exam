import React, {Component} from 'react';
import { Row, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div style={{ margin:"10px" }}>
        <Navbar color="faded" light >
          <NavbarBrand>Game storage</NavbarBrand>
            <Nav className="ml-auto">
              <Row>
              <NavItem>
                  <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
               <NavLink href="/add">Form</NavLink>
              </NavItem>
              </Row>
            </Nav>
        </Navbar>
      </div>
    );
  }
}