import React from 'react';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavbarBrand} from 'react-bootstrap';
import {NavbarHeader} from 'react-bootstrap';

export default class Navi extends React.Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#intro">Thanh Bui</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse >
                  <Nav pullRight>
                      <NavItem eventKey={1} href="#skills">My skills</NavItem>
                      <NavItem eventKey={2} href="#projects">My works</NavItem>
                      <NavItem eventKey={2} href="#contact">Contact me</NavItem>
                  </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    }
}
