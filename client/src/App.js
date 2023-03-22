//components
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import {Box} from "@mui/material"
import "./App.css"

function App() {
  return (
    <div>
        <Header/>
        <Box style={{marginTop:100}}>
          <Home/>
          
        </Box>
    </div>
  );
}

export default App;
