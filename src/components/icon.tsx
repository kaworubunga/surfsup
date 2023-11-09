import React from 'react'
import styled from 'styled-components'

export interface IconProps {
  src: any
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const IconWrapper = styled.div`
  cursor: pointer;
  margin: 0.5rem 0.75rem;
  height: 2rem;
  width: 2rem;
`

export function openLink(url: string) {
  return () => window.open(url, '_blank')
}

export function Icon({ src, onClick, onMouseEnter, onMouseLeave }: IconProps) {
  return (
    <IconWrapper
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={src} alt={'uh oh'} />
    </IconWrapper>
  )
}
