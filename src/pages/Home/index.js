import React from "react";
import { makeStyles } from '@material-ui/styles';
import { Route, Routes } from "react-router-dom";


import Header from "./components/Header";


import './style.css';
import NewPost from "../../pages/Post/New";
import Feed from "../../pages/Feed";




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
    
});

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header /> 
            <div className={classes.toolbar} />
            <main className={classes.main}>
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/feed" element={<Feed /> } />
                    <Route path="*" element={ <h1>Not Found - 404</h1> } />
                    <Route path="/post/new" element={<NewPost />} />
                </Routes>
            </main> 
            
        </div>  
    );
}

export default Home;