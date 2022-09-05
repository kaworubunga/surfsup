import React from 'react'
import styled from 'styled-components'
// import { Fade } from 'react-slideshow-image'
// import 'react-slideshow-image/dist/styles.css'

import website from '../assets/website.png'
// import heartofmeow from '../assets/heartofmeow.jpg'
// import osin from '../assets/osin.jpg'
// import snap from '../assets/snap.jpg'
// import tzou from '../assets/tzou.jpg'
// import ok from '../assets/ok.jpg'

const SlideShowWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 48rem;
  height: 27rem;
  border: solid 2px #c58fc0;
  top: 10rem;
`

// const images = [
//   {
//     url: website,
//     caption: 'First iteration of this website'
//   },
//   {
//     url: osin,
//     captions: ''
//   },
//   {
//     url: snap,
//     captions: ''
//   },
//   {
//     url: heartofmeow,
//     captions: ''
//   },
//   {
//     url: tzou,
//     captions: ''
//   },
//   {
//     url: ok,
//     captions: ''
//   }
// ]

export function SlideShow() {
  return (
    <SlideShowWrapper>
      {/*<div className='slide-container'>*/}
      {/*  <Fade>*/}
      {/*    {images.map((img, idx) => {*/}
      {/*      return (*/}
      {/*        <div className='each-fade' key={idx}>*/}
      {/*          <div className='image-container'>*/}
      {/*            <img*/}
      {/*              style={{ maxHeight: '36rem', maxWidth: '48rem' }}*/}
      {/*              src={img.url}*/}
      {/*              alt={'uh oh'}*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </Fade>*/}
      {/*</div>*/}
      <img src={website} style={{ objectFit: 'contain' }} alt={'uh oh'} />
    </SlideShowWrapper>
  )
}
