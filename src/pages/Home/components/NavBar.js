import React from "react";
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { ListItemButton, ListSubheader } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const useStyles = makeStyles({
    root: {
        padding: 16,
        width: 275,
    },
    button: {
        width: '100%',
    }
});

const tags = [
    { id: 1, name: 'reactjs'},
    { id: 2, name: 'javascript'},
    { id: 3, name: 'react native'},
    { id: 4, name: 'bootstrap'},
    { id: 5, name: 'git'},
    { id: 6, name: 'webdev'},
]


function NavBar() {
    const classes = useStyles();

    return(
        <Paper className={classes.root}> 
            <Button variant="outlined" color="secondary" className={classes.button} >Registrar Gratis</Button>
                <ListSubheader component="div" id="nested-list-subheader"> {'Tags em alta'} </ListSubheader>
                {tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`} >
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))}
                <ListItemButton>
                    Exibir mais tags
                </ListItemButton>
         </Paper>
    );
}

export default NavBar;