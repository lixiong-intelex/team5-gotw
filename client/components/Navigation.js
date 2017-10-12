import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap'

export default class Navigation extends React.Component{
    render() {
        return (
          <Nav bsStyle="pills">
            <NavItem href="/#/">Home</NavItem>
            <NavItem href="/#/About">About</NavItem>
          </Nav>
        );
    }
}