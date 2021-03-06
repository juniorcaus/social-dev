  // eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import  Avatar  from "@mui/material/Avatar";
import  Menu  from "@mui/material/Menu";
import  MenuItem from "@mui/material/MenuItem";

import { signOut } from "../../../../actions/accountActions";

function Account() {
    const account = useSelector((state) => state.account);
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = !!account.user;

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSignOut = () => {
        handleClose();

        // fazer logoff  no app através de uma action (redux)
        dispatch(signOut());
        navigate('/sign-in');
    }

    return(
        <>
            <Avatar ref={ref} onClick={handleOpen} alt="Remy Sharp" src={account.user && account.user.avatar } />
           
                {
                isAuthenticated
                ?
            <Menu 
            anchorEl={ref.current}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
            open={isOpen}    
            onClose={handleClose}
            getContentAnchorEl={null}
                >
            <MenuItem>Perfil</MenuItem>        
            <MenuItem>Meus Favoritos</MenuItem>        
            <MenuItem>Meus Posts</MenuItem>        
            <MenuItem>Minhas Conexões</MenuItem>        
            <MenuItem onClick={handleSignOut} >Sair</MenuItem>        
            </Menu>

                :

            <Menu 
            anchorEl={ref.current}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
            open={isOpen}    
             onClose={handleClose}
             getContentAnchorEl={null}
                    >
             <MenuItem>Registrar Grátis</MenuItem>        
              <MenuItem>Entrar</MenuItem>                        
             </Menu>
                
             }

        </>
    )
}

export default Account; 