import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';
import './header.css'


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" className="my-navbar">
                    <NavbarBrand ><i className="fab fa-2x fa-lg fa-angrycreative"></i></NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default Header;