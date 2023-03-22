

import {Box,styled, Typography} from "@mui/material"
import {NavData} from "../../constants/data"

const Container = styled(Box)`
    display: flex;
    margin: 0 140px 0 140px;
    justify-content: space-between;
    text-align: center;
`

const Text = styled(Typography)`
    font-family: Arial, Helvetica, sans-serif;
`

const NavBar = ()=>{
    return(
        <Container>
            {
                NavData.map(data=>(
                    <Box>
                        <img src={data.url} alt="navImage" style={{width: "90px"}} />
                        <Text>{data.text}</Text>
                    </Box>
    
                ))
            }
        </Container>
    )
}
export default NavBar;