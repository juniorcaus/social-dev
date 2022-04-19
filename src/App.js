import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// import GuestRoute from "./routes/GuestRoute";  não funcionou ao substituir o <Route path="/sign-in" element={ <SignIn /> } />
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import theme from "./theme";
import store from "./store";
import './mock';



function App() {

  return (

    <Provider store={store}>
        <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/sign-in" element={ <SignIn /> } />
            <Route path="*" element={ <h1>Not Found - 404</h1> } />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
    
    
  );
}

export default App;
