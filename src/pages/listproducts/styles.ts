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

export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;

  /* @media (min-width: 361px) and (max-width: 760px) {
    background: red;
  } */
`;

export const FormList = styled.form`
  @media (max-width: 360px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    justify-content: center;
  }
  @media (min-width: 361px) and (max-width: 760px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    justify-content: center;
  }
  @media (min-width: 761px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    justify-content: center;
  }
`;
export const LabelList = styled.label`
  @media (max-width: 360px) {
    width: 80%;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 120%;
    line-height: 16px;
    color: #eff0f5;
  }
  /* medium */
  @media (min-width: 361px) and (max-width: 760px) {
    width: 80%;
    max-width: 400px;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 100%;
    line-height: 16px;
    color: #eff0f5;
  }
  /* large */
  @media (min-width: 761px) {
    width: 100%;
    max-width: 500px;
    height: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 100%;
    line-height: 16px;
    color: #eff0f5;
  }
`;

export const InputFormList = styled.input`
  @media (max-width: 360px) {
    width: 80%;
    height: 48px;
    background: #282741;
    color: #eff0f5;
    border: none;
    margin-top: 20px;
    padding: 20px;
  }
  /* medium */
  @media (min-width: 361px) and (max-width: 760px) {
    width: 100%;
    max-width: 400px;
    height: 48px;
    padding: 20px;
    background: #282741;
    color: #eff0f5;
    border: none;
    margin-top: 20px;
  }
  /* large */

  @media (min-width: 761px) {
    width: 100%;
    max-width: 500px;
    height: 48px;
    background: #282741;
    color: #eff0f5;
    border: none;
    margin-top: 20px;
    padding: 20px;
  }
`;

export const BtnList = styled.button`
  @media (max-width: 360px) {
    width: 30%;
    margin-top: 20px;
    height: 48px;
    background: #6e76fb;
    color: #eff0f5;
    border: none;
    font-size: 120%;
    margin-left: 3px;
  }

  /* Medium */

  @media (min-width: 361px) and (max-width: 760px) {
    width: 20%;
    max-width: 400px;
    height: 48px;
    margin-top: 20px;
    background: #6e76fb;
    color: #eff0f5;
    border: none;
    font-size: 100%;
    margin-left: 3px;
  }

  /* large  */

  @media (min-width: 761px) {
    width: 20%;
    max-width: 500px;
    margin-top: 20px;
    height: 48px;
    background: #6e76fb;
    color: #eff0f5;
    border: none;
    font-size: 120%;
    margin-left: 3px;
  }
`;
