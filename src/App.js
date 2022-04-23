import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// import GuestRoute from "./routes/GuestRoute";  não funcionou ao substituir o <Route path="/sign-in" element={ <SignIn /> } />
import Auth from "./components/Auth";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import theme from "./theme";
import store from "./store";
import NewPost from "./pages/Post/New";

import './mock';



function App() {

  return (

    <Provider store={store}>
        <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Auth>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/post/new" element={ <NewPost /> } />
              <Route path="/sign-in" element={ <SignIn /> } />
              <Route path="*" element={ <h1>Not Found - 404</h1> } />
            </Routes>
        </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
    
    
  );
}

export default App;
