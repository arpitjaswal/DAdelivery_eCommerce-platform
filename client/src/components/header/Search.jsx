import {InputBase, Box, styled} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const SearchBox = styled(Box)`
   background-color: white;
   border-radius: 20px;
   width: 50%;
   margin-left:4%;
   display:flex;
`
const InputBaseStyle = styled(InputBase)`
    width: 90%;
    font-size: 15px;
    margin-left: 10px;
`

const SearchIconS = styled(Box)`
    color: red;
    padding: 10px;
`

const Search = ()=>{
    return(
        <SearchBox>
            <InputBaseStyle 
                placeholder="Search for different products..."
            />
            <SearchIconS>
                <SearchIcon/>
            </SearchIconS>
        </SearchBox>
    )
}

export default Search