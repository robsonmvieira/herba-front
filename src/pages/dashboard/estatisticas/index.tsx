/* eslint-disable indent */
import React, { useCallback, useState, useRef, useEffect } from 'react'
// import { formatUserName } from '../../utils/formatUserName'
import {
    ContainerImage,
    Content,
    BoxImage,
    Imagem,
    BoxLink
  
} from '../../../../styles/estatistica'
import Link from 'next/link'

const Estatisticas = () => {
  return (
    <div style={{ position: 'relative' }}>
      
      <Content>
        <ContainerImage>
        <BoxImage>

          <Link href="/dashboard">
           <BoxLink>
            <Imagem src="/image/cone.svg" alt="" title="" />
            Página em Contrução...
           </BoxLink>
           
            </Link>
        
        </BoxImage>                 
        </ContainerImage>
            

      </Content>
    </div>
  )}

export default Estatisticas
