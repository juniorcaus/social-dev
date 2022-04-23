import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import { SvgIcon } from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import { getNotifications } from "../../../../actions/notificationsActions";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import  { makeStyles }  from "@mui/material/";

import { 
    Bell as BellIcon,
    Star as StarIcon, 
    MessageCircle as MessageIcon, 
    Heart as HeartIcon, 
    Users as ConnectionIcon
    } from "react-feather";


const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon,
};

const useStyles = makeStyles((theme) =>  ({
    icon: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.constrastText
    }
}));

function Notifications() {
const account = useSelector((state) => state.account);
const notifications = useSelector((state) => state.notifications.notifications);
const isAuthenticated = !!account.user;
const ref = useRef(null);
const [isOpen, setOpen] = useState(false);
const dispatch = useDispatch();

const classes = useStyles();

const handleOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

useEffect(() => {
    dispatch(getNotifications());
}, [dispatch]);


    return(
        isAuthenticated && (

            <>
            <IconButton ref={ref} onClick={handleOpen}>
                <SvgIcon>
                    <BellIcon />  
                </SvgIcon>
            </IconButton>

       <Popover
            onClose={handleClose} 
            open={isOpen}    
            anchorEl={ref.current}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            >

            <Box padding={2}>
                <Typography variant="h6" color="textPrimary">
                    Notificações
                </Typography>
            </Box> 

            <List>
                 { 
                 notifications.map((notification) => {
                    const Icon = iconsMap[notification.type];
                     return ( 
                        <ListItem>
                        <ListItemAvatar>
                            <Avatar className={classes.icon}>
                                <SvgIcon>
                                    <Icon />
                                </SvgIcon>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={notification.title} primaryTypographyProps={{ variant: 'subtitle2', color: 'textPrimary' }} secondary={notification.description} />
                    </ListItem>
                     );
                    })
                    
                    }   
            </List>

        </Popover>

            </>
        )
    );
}

export default Notifications;