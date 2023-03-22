import {Box, Button, styled, Typography} from "@mui/material"
import CartIcon from "@mui/icons-material/ShoppingCart"
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > Button, & > Typography, & > div{
        margin-right: 0px;
        font-size: 14px;
    }
`
const LoginButton = styled(Button)`
    color: white;
    background-color:orangered;
    text-transform:none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`

const CustomButtons = ()=>{
    const [open, setOpen] = useState(false);
    const openDialog = ()=>{
        setOpen(true);
    }
    
    return(
        <Wrapper>
            <LoginButton variant="contained" onClick={()=>{openDialog()}}>Login</LoginButton>
            <Box>
            <Typography style={{marginTop: 3, marginLeft: 20, width: 100}}>
                Sell here!
            </Typography>
            </Box>
            <Box style={{display: "flex"}}>
                <CartIcon/>
                <Typography>
                Cart
            </Typography>
            </Box>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
       

    )
}

export default CustomButtons;