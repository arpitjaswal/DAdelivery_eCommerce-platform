

import React from 'react'
import {BannerData} from "../../constants/data"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box,styled } from '@mui/material';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Omg = styled("img")({
    width:"100%"
})

const Banner = () => {
  return (
   <Carousel responsive={responsive}
   swipeable={false}
    draggable={false}
    infinite={true}
    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}>
     {
            BannerData.map(data=>(
                <Box>
                    <Omg src={data.url} alt="bannerImages"/>
                </Box>
            ))
        }
</Carousel>
  )
}

export default Banner