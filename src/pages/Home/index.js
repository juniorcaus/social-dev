import React from "react";
import Header from "./components/Header";

//import './style.css';

import Feed from "./components/Feed";
import NavBar from "./components/NavBar";
import  Container  from "@mui/material/Container";
import Box from '@mui/material/Box';

import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
    height: '100vh',
    padding: 24,
    },
    toolbar: {
        minHeight: 64,
    }
    
})

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header /> 
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg" >
                    <Box display="flex" >
                    <NavBar />
                    <Feed />
                    </Box>
                </Container>  
            </main> 
            
        </div>
    );
}

export default Home;