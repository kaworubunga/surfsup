import React from 'react'
import styled from 'styled-components'
import { SlideShow } from '../components/slideShow'

const DesktopWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export function Desktop() {
  return (
    <DesktopWrapper>
      <SlideShow />
    </DesktopWrapper>
  )
}
