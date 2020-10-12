import { DivCortandoTela } from './../../../styles/dashboard'
import styled from 'styled-components'
import {
  Navbar as RN,
  NavbarToggler as NT,
  Nav as CN,
  DropdownItem as DDropDow,
  DropdownMenu as MDropDow
} from 'reactstrap'

export const DropdownMenu = styled(MDropDow)`
  left: -130px;
  background: #282741;
`

export const DropdownItem = styled(DDropDow)`
  width: 100%;
`
export const Navbar = styled(RN)`
  background: #282741;
`
export const NavbarToggler = styled(NT)`
  & .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(110, 118, 251, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
`

export const Nav = styled(CN)`
  & .nav-item .nav-link {
    color: rgba(47, 200, 76, 1);
  }
`

export const Container = styled.div`
  background: #1d1f2f;
  width: 100%;
  height: 100vh;
`

export const FormList = styled.form`
  @media (max-width: 497px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    justify-content: center;
    width: 100%;
  }
  @media (min-width: 498px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    justify-items: center;
  }
`
export const LabelList = styled.label`
  @media (max-width: 425px) {
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
  @media (min-width: 426px) and (max-width: 768px) {
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
  @media (min-width: 769px) {
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
`

export const InputFormList = styled.input`
  @media (max-width: 497px) {
    width: 100%;
    height: 48px;
    background: #282741;
    color: #eff0f5;
    border: none;
    margin-top: 20px;
    padding: 20px;
    padding-left: 5px;
    outline: none;
  }
  /* medium */
  @media (min-width: 498px) {
    width: 100%;
    /* max-width: 400px; */
    height: 40px;
    background: #1d1f2f;
    color: #eff0f5;
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 10px;
    padding-left: 5px;
    outline: none;
  }
`

export const ContainerBusca = styled.div`
  @media (max-width: 497px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 498px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    background: #282741;
    height: 80px;
    margin-top: 20px;
  }
`

export const BtnList = styled.button`
  @media (max-width: 497px) {
    width: 30%;
    margin-top: 21px;
    height: 48px;
    background: #ff6198;
    color: #eff0f5;
    border: none;
    font-size: 120%;
    margin-left: 3px;
  }

  /* Medium */

  @media (min-width: 498px) {
    width: 30%;
    height: 40px;
    background: #ff6198;
    color: #eff0f5;
    border: none;
    font-size: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 10px;
  }
`

export const ContainerProducts = styled.div`
  @media (max-width: 497px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 498px) and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 761px) {
    display: flex;
    flex-direction: column;
    width: 65%;

    align-items: center;
  }
`

export const ContainerTotais = styled.div`
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 761px) {
    display: flex;
    flex-direction: column;
    width: 32%;
    align-items: center;
    background: #282741;
    margin-top: 20px;
  }
`

export const ContainerValores = styled.div`
  @media (max-width: 497px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    background: #1d1f2f;
  }

  @media (min-width: 498px) {
    display: flex;
    width: 90%;
    margin-top: 20px;
    justify-items: center;
    align-items: center;
  }
`

export const ContainerVenda = styled.div`
  @media (max-width: 760px) {
    background: #1d1f2f;
    width: 100%;
  }
  @media (min-width: 761px) {
    display: flexbox;
    flex-direction: column;
    background: #282741;
    width: 100%;
    background: #1d1f2f;
  }
`

export const SpanDetalhes = styled.span`
  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #958a8a;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 15px;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #958a8a;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 15px;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #958a8a;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 15px;
    margin-left: 15px;
  }
`

export const LabelSubtotalDesconto = styled.span`
  @media (max-width: 497px) {
    display: flex;
    justify-content: start;
    align-items: start;
    color: #958a8a;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 15px;
    margin-left: 15px;
    width: 100%;
  }
  @media (min-width: 498px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    color: #958a8a;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 100%;
    line-height: 21px;
    width: 100%;
  }
`

export const FormSubtotalDesconto = styled.span`
  @media (max-width: 497px) {
    display: flex;
    justify-content: end;
    align-items: start;
    color: #958a8a;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 100%;
    line-height: 21px;
    margin-top: 15px;
    width: 100%;
    flex-direction: row-reverse;
    margin-right: 15px;
  }
  @media (min-width: 498px) {
    display: flex;
    justify-content: flex-end;
    color: #958a8a;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 100%;
    line-height: 21px;
    width: 100%;
  }
`

export const LabelValorTotal = styled.span`
  @media (max-width: 497px) {
    display: flex;
    justify-content: start;
    align-items: start;
    color: #eff0f5;
    font-family: Roboto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-top: 15px;
    margin-left: 15px;
    width: 50%;
  }
  @media (min-width: 498px) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    color: #eff0f5;
    font-family: Roboto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    width: 50%;
  }
`

export const FormTotal = styled.span`
  @media (max-width: 497px) {
    display: flex;
    justify-content: start;
    align-items: start;
    color: #ff6198;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 15px;
    flex-direction: row-reverse;
    width: 50%;
    margin-right: 15px;
  }
  @media (min-width: 498px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: end;
    color: #ff6198;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    width: 50%;
  }
`

export const BtnFormaPagamento = styled.button`
  @media (max-width: 497px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2fc84c;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    flex-direction: center;
    width: 80%;
    height: 50px;
    padding: none;
    margin-left: 35px;
    margin-top: 15px;
    border: none;
    color: #c4c4c4;
  }

  @media (min-width: 498px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2fc84c;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 100%;
    line-height: 21px;
    flex-direction: row;
    width: 40%;
    height: 30px;
    margin-left: 15px;
    border: none;
    color: #c4c4c4;
    overflow: auto;
  }
`

export const BtnFinalizar = styled.button`
  @media (max-width: 497px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2fc84c;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    flex-direction: center;
    width: 80%;
    height: 50px;
    margin-top: 20px;
    margin-left: 35px;
    border: none;
    color: #c4c4c4;
  }

  @media (min-width: 498px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2fc84c;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 100%;
    line-height: 21px;
    flex-direction: row;
    width: 100%;
    height: 40px;
    border: none;
    color: #c4c4c4;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`

export const ContainerValorTotal = styled.div`
  @media (min-width: 497px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
    align-items: center;
    background: #1d1f2f;
  }

  @media (min-width: 498px) {
    display: flex;
    width: 60%;
    margin-top: 20px;
    justify-items: center;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
`

export const TableHead = styled.div`
  background: #282741;
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  color: #fff;
`
export const ContainerSpan = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 0 10px;
    width: 100%;
    height: 70px;
    background: #282741;
    margin-bottom: 5px;
  }
`

export const TableRow = styled.div`
  background: #282741;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  justify-items: center;
  color: #fff;
`
export const SpanListTd = styled.span`
  @media (max-width: 767px) {
    background: #282741;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.7rem;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 100%;
    height: 100%;
    display: flex;
    color: #fff;
    font-size: 1rem;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`
export const SpanListTh = styled.span`
  @media (max-width: 767px) {
    background: #282741;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    background: #282741;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
  }
`
export const DivTabela = styled.div`
  width: 90%;
  height: 60px;
  margin-top: 40px;
  background: #282741;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerSpanTotais = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 50px;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 0 10px;
    width: 50%;
    height: 50px;
  }
`

export const HTitulo = styled.h2`
  color: #fff;
`
export const TableRowPdv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContainerTabelaPdv = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: center;
  margin-bottom: 50px;
`
