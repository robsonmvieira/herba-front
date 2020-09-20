/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'

import {
  ContainerIconsInfo,
  ItemContainer,
  ContainerItemInfo,
  InputIconInfo,
  ContainerBtn
} from './styles'

const Product = ({ title, price }) => {
  return (
    <ItemContainer>
      <ContainerItemInfo>
        <h6>{title}</h6>
        <span style={{ marginBottom: 8, marginLeft: 10 }}>
          Preço R$ {price}
        </span>
      </ContainerItemInfo>
      <ContainerIconsInfo>
        <InputIconInfo />
        <ContainerBtn>
          <img src="/image/compra.svg" alt="" />
        </ContainerBtn>
      </ContainerIconsInfo>
    </ItemContainer>
  )
}

export default Product
