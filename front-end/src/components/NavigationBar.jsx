import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavLink } from 'reactstrap';

import MyClass from './Products';
import ProductForm from './ProductForm';


class NavigationBar extends Component {
  render() {
    return (
      <Navbar color="faded" light>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/ProductForm">Form</NavLink>
        </NavItem>
      </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
