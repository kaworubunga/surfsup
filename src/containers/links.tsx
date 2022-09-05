import React from 'react'
import styled from 'styled-components'
import { Icon, IconWrapper, openLink } from '../components/icon'
import crungo from '../assets/crungo.webp'
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
  function setToolTipCurry(text: string) {
    return () => setToolTip(text)
  }

  return (
    <LinksWrapper>
      <IconWrapper
        onClick={openLink('https://twitter.com/kaworubunga_')}
        onMouseEnter={setToolTipCurry('@kaworubunga_')}
        onMouseLeave={setToolTipCurry('')}
      >
        <IconRenderer icon={'twitter'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink('https://discord.com/users/184908216205836288')}
        onMouseEnter={setToolTipCurry('SurfsUp#0001')}
        onMouseLeave={setToolTipCurry('')}
      >
        <IconRenderer icon={'discord'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink('https://www.twitch.tv/surfsup__')}
        onMouseEnter={setToolTipCurry('twitch.tv/SurfsUp__')}
        onMouseLeave={setToolTipCurry('')}
      >
        <IconRenderer icon={'twitch'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink(
          'https://www.youtube.com/channel/UCcsfy5KH_7OXNa7lf-YACdQ'
        )}
        onMouseEnter={setToolTipCurry('Surfs Up')}
        onMouseLeave={setToolTipCurry('')}
      >
        <IconRenderer icon={'youtube'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink('https://github.com/kaworubunga')}
        onMouseEnter={setToolTipCurry('kaworubunga')}
        onMouseLeave={setToolTipCurry('')}
      >
        <IconRenderer icon={'github'} />
      </IconWrapper>
      <IconWrapper
        onClick={openLink(
          'https://vrchat.com/home/user/usr_717cf154-ce0b-442c-93c6-120d00ec9c27'
        )}
        onMouseEnter={setToolTipCurry('Surfs Up')}
        onMouseLeave={setToolTipCurry('')}
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
      <Icon
        src={crungo}
        onClick={openLink('https://crungo.com/')}
        onMouseEnter={setToolTipCurry('crungo.com')}
        onMouseLeave={setToolTipCurry('')}
      ></Icon>
    </LinksWrapper>
  )
}
