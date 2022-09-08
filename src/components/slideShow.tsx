import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import website from '../assets/website.png'
import heartofmeow from '../assets/heartofmeow.jpg'
import osin from '../assets/osin.jpg'
import snap from '../assets/snap.jpg'
import tzou from '../assets/tzou.jpg'
import ok from '../assets/ok.jpg'

const SlideShowWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 10rem;
`

const SlideWrapper = styled.div`
  width: 52rem;
  height: 39rem;
`

const Image = styled.img`
  margin: 1rem auto;
  border: solid 2px #18181b;
  outline: solid 2px #c58fc0;
`

const images = [
  {
    url: website,
    caption: 'First iteration of this website'
  },
  ...[
    {
      url: osin,
      captions: ''
    },
    {
      url: snap,
      captions: ''
    },
    {
      url: heartofmeow,
      captions: ''
    },
    {
      url: tzou,
      captions: ''
    },
    {
      url: ok,
      captions: ''
    }
  ].sort(() => Math.random() - 0.5)
]

const fadeProperties = {
  arrows: false,
  fade: true,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true
}

export function SlideShow() {
  return (
    <SlideShowWrapper>
      <SlideWrapper>
        <Slider {...fadeProperties}>
          {images.map((img, idx) => {
            return (
              <div key={idx}>
                <Image
                  style={{ maxHeight: '36rem', maxWidth: '48rem' }}
                  src={img.url}
                  alt={'uh oh'}
                />
              </div>
            )
          })}
        </Slider>
      </SlideWrapper>
    </SlideShowWrapper>
  )
}
