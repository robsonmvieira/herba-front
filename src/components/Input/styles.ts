import styled from 'styled-components'

export const Input = styled.input`
  background: #282741;
  @media (max-width: 775px) {
    width: 80%;
    height: 48px;
    background: #282741;
    color: #eff0f5;
    border: none;
  }
  /* medium */
  @media (min-width: 776px) {
    width: 80%;
    height: 48px;
    background: #1d1f2f;
    color: #eff0f5;
    border: none;
    display: flex;
    align-items: center;
  }
  /* large */
`
