import React from "react";

//import '../style.css';
import '../../style.css';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import logo from '../../../../img/logo.png';
//import logo from '../../../img/logo.png';
import { Bell } from "react-feather";


import Account from "./Account";



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
  
   
    
    return (
        <AppBar position="fixed" color="inherit" className="appBar">
                <Toolbar>
                    <img src={logo} alt="logo" className={classes.img} />
                    <div className={classes.grow} />
                    
                    <div className={classes.userSection}>
                    <Button variant="contained"  className="btn" > 
                        Novo Post 
                    </Button> 
                    <SvgIcon className={classes.bell}>
                        <Bell/>
                    </SvgIcon>
                    <Account />

                    </div>
        
                </Toolbar>
            </AppBar>
    );
}

export default Header;