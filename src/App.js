import React from "react";
import Home from "./pages/Home";

import { ThemeProvider } from '@mui/material/styles';

import theme from "./theme";

function App() {

  return (

    <ThemeProvider theme={theme}>
        <Home/>
    </ThemeProvider>

    
  );
}

export default App;
