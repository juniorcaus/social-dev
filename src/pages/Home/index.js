import React from "react";
import Header from "./components/Header";

//import './style.css';
import Feed from "./components/Feed";
import NavBar from "./components/NavBar";

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
    height: '100vh',
    display: 'flex',
    width: '97%',
    margin: '0 auto',
    }
})

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Header /> 
            <main className={classes.main}>
                <NavBar />
                <Feed />
            </main> 
            
        </div>
    );
}

export default Home;