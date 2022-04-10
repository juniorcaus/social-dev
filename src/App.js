import React from "react";
import { ThemeProvider } from '@mui/material/styles';

import Home from "./pages/Home";
import SignIn from "./pages/Signin";

import theme from "./theme";

function App() {
  console.log(window.location.href);
  const url = window.location.href; 

  return (
    
    <ThemeProvider theme={theme}>
      {
      url ===  'http://localhost:3000/'
      ? <Home />

      : <SignIn />
      }

       
    </ThemeProvider>
  );
}

export default App;
