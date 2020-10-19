import React, { useEffect, useState } from 'react'
import {
  Navbar,
  Container,
  ContainerProducts,
  ContainerVenda,
  ContainerValores,
  LabelValorTotal,
  FormTotal,
  BtnFinalizar,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  BoxDetalhes,
  Detalhes,
  Label,
  Descricao,
  ContainerTotais,
  ContainerIconsLg,
  ContainerTags,
  IconsTags,
  ContainerSpan,
  LabelClienteDashboard,
  LabelDescricaoDashboard,
  LabelClienteDashboardMenos,
  FormTotalCustomColor
} from '../styles'
import { NavbarBrand } from 'reactstrap'
import { GetServerSideProps, InferGetStaticPropsType } from 'next'
import apiService from '../../../services/apiService'

interface SaleProps {
  id: string
  created_at: string
  updated_at: string
  collaborator_id: string
  type_of_payment: string
  sub_total: string
  descount: number
  total: string
  owner_id: string
}

const CloseBox = ({
  salesOfDay
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const [salesSize, setSalesSize] = useState<number>(salesOfDay.length)

  const [totalValueSales, setTotalValueSales] = useState(
    salesOfDay.reduce((a: SaleProps, b: SaleProps) => a + b.total, 0)
  )

  const [totalSalesByDebito, setTotalSalesByDebito] = useState(
    salesOfDay
      .filter((p: SaleProps) => p.type_of_payment === 'debito')
      .reduce((a: SaleProps, b: SaleProps) => a + b.total, 0)
  )

  const [totalSalesByCredito, setTotalSalesByCredito] = useState(
    salesOfDay
      .filter((p: SaleProps) => p.type_of_payment === 'credito')
      .reduce((a: SaleProps, b: SaleProps) => a + b.total, 0)
  )

  const [totalSalesByMoney, setTotalSalesByMoney] = useState(
    salesOfDay
      .filter((p: SaleProps) => p.type_of_payment === 'dinheiro')
      .reduce((a: SaleProps, b: SaleProps) => a + b.total, 0)
  )

  const [parsedToBRLTotal, setParsedToBRLTotal] = useState('')
  const [parsedToBRLDebitosales, setParsedToBRLDebitosales] = useState('')
  const [parsedToBRLCreditosales, setParsedToBRLCreditoSales] = useState('')
  const [parsedToBRLMoneySales, setParsedToBRLMoneySales] = useState('')

  useEffect(() => {
    setParsedToBRLTotal(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(Number(totalValueSales))
    )
  }, [totalValueSales])

  useEffect(() => {
    setParsedToBRLDebitosales(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(totalSalesByDebito)
    )
  }, [totalSalesByDebito])

  useEffect(() => {
    setParsedToBRLCreditoSales(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(totalSalesByCredito)
    )
  }, [totalSalesByCredito])

  useEffect(() => {
    setParsedToBRLMoneySales(
      new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
      }).format(totalSalesByMoney)
    )
  }, [totalSalesByMoney])

  return (
    <div>
      <Navbar light expand="ml">
        <div>
          <NavbarBrand href="/">
            <img
              src="/image/logo-pdv.svg"
              alt="this is a logo push left side of menu on top level"
            />
          </NavbarBrand>
        </div>

        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle tag="a" className="nav-link" caret>
            Barbara C.
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/blah" active>
              Log-Off
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Navbar>
      <Container>
        <ContainerVenda>
          <ContainerProducts>
            <ContainerIconsLg>
              <ContainerTags>
                <IconsTags>
                  <ContainerSpan>
                    {parsedToBRLMoneySales && (
                      <LabelClienteDashboard>
                        {parsedToBRLMoneySales}
                      </LabelClienteDashboard>
                    )}
                  </ContainerSpan>
                  <ContainerSpan>
                    <LabelDescricaoDashboard>
                      Venda no Dinheiro
                    </LabelDescricaoDashboard>
                  </ContainerSpan>
                </IconsTags>
                <IconsTags>
                  <ContainerSpan>
                    {parsedToBRLDebitosales && (
                      <LabelClienteDashboard>
                        {parsedToBRLDebitosales}
                      </LabelClienteDashboard>
                    )}
                  </ContainerSpan>
                  <ContainerSpan>
                    <LabelDescricaoDashboard>
                      Venda no Débito
                    </LabelDescricaoDashboard>
                  </ContainerSpan>
                </IconsTags>
                <IconsTags>
                  <ContainerSpan>
                    <LabelClienteDashboardMenos>
                      {parsedToBRLCreditosales}
                    </LabelClienteDashboardMenos>
                  </ContainerSpan>
                  <ContainerSpan>
                    <LabelDescricaoDashboard>
                      Venda no Crédito
                    </LabelDescricaoDashboard>
                  </ContainerSpan>
                </IconsTags>
              </ContainerTags>
            </ContainerIconsLg>
          </ContainerProducts>

          <ContainerTotais>
            <BoxDetalhes>
              <Detalhes>Vendas:</Detalhes>
            </BoxDetalhes>

            <ContainerValores>
              <Label>N° de Vendas:</Label>
              <Descricao>{salesSize}</Descricao>
            </ContainerValores>
            <ContainerValores>
              <Label>Carro Chefe:</Label>
              <Descricao>Cookie</Descricao>
            </ContainerValores>

            <ContainerValores>
              <Label>Subtotais:</Label>
              <Descricao>R$100,00</Descricao>
            </ContainerValores>

            <ContainerValores>
              <Label>Descontos:</Label>

              <Descricao>R$10,00</Descricao>
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Valor Total:</LabelValorTotal>
              {parsedToBRLTotal && (
                <FormTotalCustomColor>{parsedToBRLTotal}</FormTotalCustomColor>
              )}
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Dinheiro:</LabelValorTotal>
              <FormTotal>R$50,00</FormTotal>
            </ContainerValores>
            <ContainerValores>
              <LabelValorTotal>Cartões:</LabelValorTotal>
              <FormTotal>R$40,00</FormTotal>
            </ContainerValores>
            <ContainerValores>
              <BtnFinalizar>Fechar Caixa</BtnFinalizar>
            </ContainerValores>
          </ContainerTotais>
        </ContainerVenda>
      </Container>
    </div>
  )
}

export default CloseBox

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await apiService.get<SaleProps[]>(
    '/associates//salesOfDay/?associado=9addaa98-ef00-4a21-b781-861b6e8fbc92'
  )
  const res = response.data
  console.log(res)
  return {
    props: { salesOfDay: res }
  }
}
