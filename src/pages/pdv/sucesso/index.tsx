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
import Link from 'next/link'

const SucessProducts = () => {
  return (
    <div style={{ position: 'relative' }}>
      
      <Container>
        <ContainerVenda>
        <ContainerVendido>

          <Link href="/pdv">
           <a>
            <Imagem src="/image/Vector.svg" alt="volta ao menu do pdv" title="Retornar ao Ponto de Venda." />
           </a>
            </Link>
        
        </ContainerVendido>                 
        </ContainerVenda>
            <BoxTexto>
                <Texto>Venda realizada com sucesso!</Texto>
            </BoxTexto>

      </Container>
    </div>
  )}

export default SucessProducts
