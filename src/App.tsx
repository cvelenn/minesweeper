import React, {useState} from 'react';
import { Map } from './features/map/Map';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './app/darkTheme';
import lightTheme from './app/lightTheme';
import Box from "@mui/material/Box";
import {Menu} from "./features/menu/Menu";

function App() {

  const [theme, setTheme] = useState(false);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <Menu value={theme} callback={setTheme} />
      <Box className="App" sx={{bgcolor: "background.default"}}>
        <Map />
      </Box>
    </ThemeProvider>
  );
}

export default App;
