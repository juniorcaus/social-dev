import React from "react";

//import '../style.css';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import logo from '../../../img/logo.png';
import { Bell } from "react-feather";



const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },      
    
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        marginRight: '30px'
    },


});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <img src={logo} alt="logo" className={classes.img} />
                    <div className={classes.grow}></div>
                    
                    <div className={classes.userSection}>
                    <Button className={classes.button} variant="contained" > 
                        Novo Post 
                    </Button> 
                    <SvgIcon>
                        <Bell></Bell>
                    </SvgIcon>

                    </div>
        
                </Toolbar>
            </AppBar>
    );
}

export default Header;