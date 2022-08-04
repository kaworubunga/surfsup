import React from 'react'
import styled from 'styled-components'
import { Clock } from '../components/clock'

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #1f1f23;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
`

const StartButton = styled.div`
  display: flex;
  height: inherit;
  text-align: center;
  vertical-align: middle;
  p {
    margin: 1rem;
  }
`

export function Footer() {
  return (
    <FooterContainer>
      <StartButton>
        <p>Start</p>
      </StartButton>
      <Clock></Clock>
    </FooterContainer>
  )
}
