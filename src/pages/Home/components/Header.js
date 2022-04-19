import React from "react";

import '../style.css';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import logo from '../../../img/logo.png';
import { Bell } from "react-feather";
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";




const useStyles = makeStyles({
    //appBar:{},  // btn: {}, estilizado no arquivo style.css
      
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
    bell: {
        marginRight: 10,
        marginLeft: 15,
    }
  


});

function Header() {
    const classes = useStyles();
    const account = useSelector(state => state.account);
   
    
    return (
        <AppBar position="fixed" color="inherit" className="appBar">
                <Toolbar>
                    <img src={logo} alt="logo" className={classes.img} />
                    <div className={classes.grow}></div>
                    
                    <div className={classes.userSection}>
                    <Button variant="contained"  className="btn" > 
                        Novo Post 
                    </Button> 
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Remy Sharp" src={account.user && account.user.avatar } />

                    </div>
        
                </Toolbar>
            </AppBar>
    );
}

export default Header;