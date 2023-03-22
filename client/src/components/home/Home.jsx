

import React from 'react'
import NavBar from './NavBar';
import Banner from "./Banner"
import {Box,styled} from "@mui/material"


const Padded = styled(Box)`
    padding: 10px;
    background: skyblue;

`

const Home = () => {
  return (
    <>
        <NavBar/>
        <Padded>
            <Banner/>
        </Padded>
        
    </>
  )
}

export default Home;