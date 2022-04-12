import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/Signin";

import theme from "./theme";

function App() {

  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/sign-in" element={ <SignIn /> } />
          <Route path="*" element={ <h1>Not Found - 404</h1> } />
        </Routes>
      
      </BrowserRouter>
    
       
    </ThemeProvider>
  );
}

export default App;
