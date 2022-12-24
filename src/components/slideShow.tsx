import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import images from '../assets/images/images'

const SlideShowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 10vh;
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

const slideShowImages = [...images.sort(() => Math.random() - 0.5)].map(
  (img, idx) => (
    <ImageWrapper key={idx}>
      <Image src={img.url} alt={'uh oh'} />
      <p>{img.caption}</p>
    </ImageWrapper>
  )
)

const fadeProperties = {
  arrows: true,
  fade: true,
  infinite: true,
  speed: 2500,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true
}

export function SlideShow() {
  return (
    <SlideShowWrapper>
      <p> hey welcome to my website</p>
      <p>i don't know what to put here so here's some pictures i took</p>
      <SlideWrapper>
        <Slider {...fadeProperties}>{slideShowImages}</Slider>
      </SlideWrapper>
    </SlideShowWrapper>
  )
}
