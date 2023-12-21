import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export function Clock() {
  const [date, setDate] = useState(new Date())

  function refreshClock() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  const Digits = styled.p`
    margin: 1rem;
  `

  const dateTimeFormat = Intl.DateTimeFormat('en-US', {
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    timeZoneName:'shortOffset',
    timeZone: 'America/Los_Angeles',
  })

  return <Digits>{dateTimeFormat.format(date)}</Digits>
}
