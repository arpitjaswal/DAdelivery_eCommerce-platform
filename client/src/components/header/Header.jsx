
import {AppBar, Toolbar, styled, Box, Typography} from "@mui/material"
import CustomButtons from "./CustomButtons"
import Search from "./Search"

const StyledHeader = styled(AppBar)`
background: green;
height: 90px;
`
const Component = styled(Box)`
    margin-left: 7%;
    line-height: 0;
`
const SubHeading = styled(Typography)`
    font-size: 12px;
    font-style: italic;
`

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
    margin-top: 1%;
    display: flex;
    
`

function Header(){
    const logoURL = "https://gcdnb.pbrd.co/images/4HccDQW0EDiJ.png?o=1"

    return(
        <StyledHeader>
            <Toolbar>
               <Component>
                    <img src={logoURL} alt="logo" style={{width: 90, borderRadius:100}}/>
                    <Box>
                        <SubHeading>
                            membership 
                            <Box component="span" style={{color:'yellow'}}>
                                Plus
                            </Box>
                        </SubHeading>
                    </Box>
                </Component> 
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
};

export default Header;