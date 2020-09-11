import React, {PureComponent} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Navigation extends PureComponent {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Azerion Demo</NavbarBrand>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">EndUser</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/admin">Admin</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/m2m">M2M</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;