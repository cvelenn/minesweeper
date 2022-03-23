import React, {useState} from 'react';
import { Map } from './features/map/Map';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './app/theme/darkTheme';
import lightTheme from './app/theme/lightTheme';
import Box from "@mui/material/Box";
import {Menu} from "./features/menu/Menu";

function App() {

  const [theme, setTheme] = useState(false);
  const themeProp = {
    value: theme, 
    callback: setTheme
  }
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Menu theme={themeProp} />
      <Box className="App" sx={{bgcolor: "background.default"}}>
        <Map />
      </Box>
    </ThemeProvider>
  );
}

export default App;
