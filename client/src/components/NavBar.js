import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "..";

export default observer(function NavBar() {
  const { user } = useContext(Context);

  const logOut = () => {
    user.setIsAuth(false);
    user.setUser({});
  };
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
      <Container>
        <NavLink to={SHOP_ROUTE} className={"me-auto"} style={{ fontSize: 24 }}>
          Gadgets-Shop
        </NavLink>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto d-flex align-items-center'>
            {user.isAuth ? (
              <>
                <NavLink className={"me-3"} to={ADMIN_ROUTE}>
                  <Button variant='outline-dark'>Admin</Button>
                </NavLink>
                <Button variant='outline-danger' onClick={logOut}>
                  LogOut
                </Button>
              </>
            ) : (
              <>
                <NavLink
                  className={"me-3"}
                  onClick={() => {
                    user.setIsAuth(true);
                  }}
                  to={LOGIN_ROUTE}
                >
                  Sign in
                </NavLink>
                <NavLink to={REGISTRATION_ROUTE}>
                  <Button variant='outline-primary'>Sign up</Button>
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});
