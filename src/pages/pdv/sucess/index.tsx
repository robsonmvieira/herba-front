/* eslint-disable indent */
import React, { useCallback, useState, useRef, useEffect } from 'react'
// import { formatUserName } from '../../utils/formatUserName'
import {
    ContainerVenda,
    Container,
    ContainerVendido,
    Imagem,
    Texto,
    BoxTexto
  
} from './styles'

const SucessProducts = () => {
  return (
    <div style={{ position: 'relative' }}>
      
      <Container>
        <ContainerVenda>
        <ContainerVendido>
            <Imagem src="/image/Vector.svg" alt=""/>
        </ContainerVendido>                 
        </ContainerVenda>
            <BoxTexto>
                <Texto>Venda realizada com sucesso!</Texto>
            </BoxTexto>

      </Container>
    </div>
  )}

export default SucessProducts
