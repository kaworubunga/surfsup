import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import website from '../assets/images/website.png'
import images from '../assets/images/images'

const SlideShowWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 15vh;
`

const SlideWrapper = styled.div`
  width: 52rem;
  height: 39rem;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

const Image = styled.img`
  margin: 1rem auto;
  border: solid 2px #18181b;
  outline: solid 2px #c58fc0;
  max-height: 36rem;
  max-width: 48rem;
`

const slideShowImages = [
  {
    url: website,
    caption: 'First iteration of this website'
  },
  ...images
    .map((img) => ({ url: img, caption: '' }))
    .sort(() => Math.random() - 0.5)
]

const fadeProperties = {
  arrows: true,
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
          {slideShowImages.map((img, idx) => {
            return (
              <ImageWrapper key={idx}>
                <Image src={img.url} alt={'uh oh'} />
              </ImageWrapper>
            )
          })}
        </Slider>
      </SlideWrapper>
    </SlideShowWrapper>
  )
}
