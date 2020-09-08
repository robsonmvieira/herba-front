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
  display: flex;
  align-items: flex-end;
  background: #282741;

  & .nav-item .nav-link {
    color: #eff0f5;
    justify-items: center;
    align-items: center;
    justify-content: center;
    display: flex;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
  & .nav-link {
    margin-right: 50px;
    :hover {
      background-color: #2fc84c;
      font-weight: bolder;
      overflow: hidden;
      width: 80%;
      border-radius: 2px;
      -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }

  @media (max-width: 767px) {
    display: flex;
    align-items: flex-end;
    background: #282741;

    & .nav-item .nav-link {
      color: #eff0f5;
      justify-items: center;
      align-items: center;
      justify-content: center;
      display: flex;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }
    & .nav-link {
      margin-right: 10px;
      :hover {
        background-color: #2fc84c;
        font-weight: bolder;
        overflow: hidden;
        width: 100%;
        border-radius: 2px;
        -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
`;

export const ImgLogo = styled.img`
  margin-left: 10px;
  /* :hover {
    background-color: #2fc84c;
    font-weight: bolder;
    overflow: hidden;

    -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -moz-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -ms-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    -o-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  } */
`;
