import styled from "styled-components";
import { Navbar as RN, NavbarToggler as NT, Nav as CN } from "reactstrap";

export const Navbar = styled(RN)`
  background: #282741;
`;
export const NavbarToggler = styled(NT)`
  & .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(110, 118, 251, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
`;

export const Nav = styled(CN)`
  & .nav-item .nav-link {
    color: rgba(47, 200, 76, 1);
  }
`;
