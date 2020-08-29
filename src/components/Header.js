import React, {Component} from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLowVision } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import Clock from './Clock';

class Header extends Component {

    render() {
      return (
        <div className="header">
            <Navbar bg="dark" variant="dark" expand="lg">
             <FontAwesomeIcon icon={faLowVision} size="2x" className="fa-eye"/> &nbsp;&nbsp;    
                <Navbar.Brand href="/">HAWK-EYE</Navbar.Brand>
                <Clock />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <NavDropdown
                    size="sm"
                    alignRight
                    title="admin"
                    id="basic-nav-dropdown"
                    >
                    <NavDropdown.Item href="#action/3.1">
                        <FontAwesomeIcon icon={faUser} />
                        <span className="item-title">My Profile</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        <FontAwesomeIcon icon={faInbox} />
                        <span className="item-title">Inbox</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                        <FontAwesomeIcon icon={faCog} />
                        <span className="item-title">Change Password</span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span className="item-title">Sign Out</span>
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
      );
    }
  }
  
  export default Header;