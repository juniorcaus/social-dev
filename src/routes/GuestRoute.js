import React from "react";
import { Routes } from 'react-router-dom';

import authService from "../services/authService";
import Home from "../pages/Home";


function GuestRoute({element: Component, ...rest}) {
    const isAuthenticated = authService.isAuthenticated();
    
    return(
        <Routes {...rest} element={( isAuthenticated ? <Home /> : Component )} />
    )
}

export default GuestRoute; 