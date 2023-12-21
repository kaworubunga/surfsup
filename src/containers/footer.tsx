import React, { useState } from 'react'
import styled from 'styled-components'
import { Links } from './links'

const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: #0e0e10;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  text-align: center;
`

const ToolTip = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 2rem;
  flex-flow: column nowrap;
  align-items: center; /* aligns on horizontal for column */
`

export function Footer() {
  const [tooltip, setTooltip] = useState('')

  return (
    <>
      <ToolTip>
        <p>{tooltip}</p>
      </ToolTip>
      <FooterWrapper>
        <Links setToolTip={setTooltip}></Links>
      </FooterWrapper>
    </>
  )
}
