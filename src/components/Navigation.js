import React, {PureComponent} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {ACCESS_TOKEN} from "../constants";

class Navigation extends PureComponent {
    constructor(props) {
        super(props);
        this.navi = this.navi.bind(this);
    }

    navi(){
        localStorage.setItem(ACCESS_TOKEN, "");
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/" onClick={this.navi}>Azerion Demo</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/" onClick={this.navi}>EndUser</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin" onClick={this.navi}>Admin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/m2m" onClick={this.navi}>M2M</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;