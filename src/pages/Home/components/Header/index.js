import React from "react";

//import '../style.css';
import '../../style.css';

import { makeStyles } from '@material-ui/styles';

import Notifications from "./Notifications";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../../../../img/logo.png';
//import logo from '../../../img/logo.png';



import Account from "./Account";
import { Box } from "@mui/material";
import WritePost from "./WritePost";



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

});

function Header() {
    const classes = useStyles();
  
   
    
    return (
        <AppBar position="fixed" color="inherit" className="appBar">
                <Toolbar>
                    <img src={logo} alt="logo" className={classes.img} />
                    <div className={classes.grow} />
                    
                    <div className={classes.userSection}>

                    <WritePost />

                    <Box marginLeft={2}>
                    <Notifications />
                    </Box>

                    <Box marginLeft={2} >
                    <Account />
                    </Box>


                    </div>
        
                </Toolbar>
            </AppBar>
    );
}

export default Header;