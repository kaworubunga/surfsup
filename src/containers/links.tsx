import React from 'react'
import styled from 'styled-components'
import { IconWrapper, openLink } from '../components/icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-common-types'

const LinksWrapper = styled.div`
  display: flex;
  margin: auto;
`

const SIZE = '2x'

interface LinksProps {
  setToolTip: React.Dispatch<React.SetStateAction<any>>
}

interface IconRendererProps {
  icon: IconName
}

export function IconRenderer({ icon }: IconRendererProps) {
  return (
    <FontAwesomeIcon
      icon={['fab', icon]}
      color={'grey'}
      size={SIZE}
      fixedWidth
    />
  )
}

export function Links({ setToolTip }: LinksProps) {
  function setToolTipCallback(text: string) {
    return () => setToolTip(text)
  }

  return (
    <LinksWrapper>
      <IconWrapper
        onClick={openLink('https://twitter.com/surfsuwu')}
        onMouseEnter={setToolTipCallback('@surfsuwu')}
        onMouseLeave={setToolTipCallback('')}
      >
        <IconRenderer icon={'twitter'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink('https://discord.com/users/184908216205836288')}
        onMouseEnter={setToolTipCallback('surfsup')}
        onMouseLeave={setToolTipCallback('')}
      >
        <IconRenderer icon={'discord'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink('https://www.twitch.tv/surfsup__')}
        onMouseEnter={setToolTipCallback('twitch.tv/SurfsUp__')}
        onMouseLeave={setToolTipCallback('')}
      >
        <IconRenderer icon={'twitch'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink(
          'https://www.youtube.com/channel/UCcsfy5KH_7OXNa7lf-YACdQ'
        )}
        onMouseEnter={setToolTipCallback('Surfs Up')}
        onMouseLeave={setToolTipCallback('')}
      >
        <IconRenderer icon={'youtube'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink('https://github.com/kaworubunga')}
        onMouseEnter={setToolTipCallback('kaworubunga')}
        onMouseLeave={setToolTipCallback('')}
      >
        <IconRenderer icon={'github'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink(
          'https://vrchat.com/home/user/usr_717cf154-ce0b-442c-93c6-120d00ec9c27'
        )}
        onMouseEnter={setToolTipCallback('Surfs Up')}
        onMouseLeave={setToolTipCallback('')}
      >
        <span className={`fa-layers fa-fw fa-${SIZE}`}>
          <FontAwesomeIcon
            icon={['fas', 'message']}
            color={'grey'}
            flip='horizontal'
            style={{ margin: 0 }}
          />
          <span
            className='fa-layers-text'
            style={{
              color: '#323239',
              fontFamily: 'Rubik, sans-serif',
              fontSize: '1rem',
              left: '41%',
              top: '42%'
            }}
          >
            VRC
          </span>
        </span>
      </IconWrapper>
    </LinksWrapper>
  )
}
