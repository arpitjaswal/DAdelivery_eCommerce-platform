import React from 'react';
import Dialog from '@mui/material/Dialog';
import {Box, TextField, Typography, Button, styled} from "@mui/material"

const LoginDialog = ({open,setOpen}) => {
    const handleClose = ()=>{
        setOpen(false);
    }
    const Container = styled(Box)`
        height:70vh;
        width:90vh;
        display:flex;
    `
    const Image = styled(Box)`
        background: url("https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80") center no-repeat;
        background-size:100% 100%;
        height: 100%;
        width:40%;
        flex:1;
        padding: 45px 35px;
    `
    const TextFields = styled(Box)`
        display:flex;
        flex-direction:column;
        padding: 25px 35px;
        flex:1;
        & > div, & > button, &>p{
            margin-top:20px;
        }
    `
    const LoginButton = styled(Button)`
        text-transform:none;
        background:red;
        color:white;
        border-radius:10px;
    `
    const OTPbutton = styled(Button)`
        text-transform:none;
        color:black;
        border-radius:10px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
    `
  return (
    <Dialog open={open} onClose={handleClose}>
        <Container>

            <Image>
                <Typography variant='h5'>Login Page</Typography>
                <Typography style={{marginTop: 20}}>Get access to exclusive ecommerce store of DAIICT.</Typography>
            </Image>
            <TextFields>
                <TextField variant='standard' label="Enter mobile number/email"/>
                <TextField variant='standard' label="Enter password"/>
                
                <LoginButton>Login</LoginButton>
                <Typography>OR</Typography>
                <Typography>New to DAdelivery? Create a free account.</Typography>
                <OTPbutton>Request fOTP</OTPbutton>


            </TextFields>
        </Container>
    </Dialog>
  )
}

export default LoginDialog;