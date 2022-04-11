import React from "react";
import './style.css';

import { makeStyles } from '@material-ui/styles';
import typography from "../../theme/typography";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'grow',
        height: '100vh',
    }
})

function SignIn() {
    const classes = useStyles();

    return(
        <div className={classes.root}>{/*  FLEX CONTAINER */}
        
            <div className="left">{/*  FLEX ITEM CONTAINER */}
                <h2 className="titulo">Simplificando a forma de conectar desenvolvedores</h2>
                    
                <h4 className="subtitulo">Compartilhe seu conhecimento com toda nossa rede de desenvolvedores</h4>
            </div>

            <div className="right">{/* FLEX ITEM */}
                <form className="form">
                    <h4>ACESSO</h4>
                    <input type="text" />
                    <input type="text" />

                </form>
                
            </div>    

        </div>
    );
}

export default SignIn;