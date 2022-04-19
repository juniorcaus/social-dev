import React, { useState } from "react";
import './style.css';

import { makeStyles } from '@material-ui/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar  from "@mui/material/Avatar";
import { indigo } from "@mui/material/colors";
import Typography  from "@mui/material/Typography";
import  Button from "@mui/material/Button";
import TextField  from "@mui/material/TextField";
import  Link  from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { FormHelperText } from "@mui/material";
import {useSelector, useDispatch } from 'react-redux';
import  signIn  from '../../actions/accountActions';



const useStyles = makeStyles({
    root: {
    height: '100vh',
    },
})

function Copyright () {
    return(
        <Typography variant="body2" align="center" className="copyright" >
            {'Copyright © '}
            <a color="inherit" href="https://www.linkedin.com/in/miltoncaus/">
            JCaus
            </a> <div></div>

            {new Date().getFullYear()}
                
        </Typography>   
    );
}

function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    const dispatch = useDispatch();

    const account = useSelector(state => state);
    

        //EXISTE DUAS MANEIRAS DE REALIZAR ESSA FUNCTION 
        // 1º DELAS ↓
    /* function handleSignIn() {
        //chamada a API da nossa aplicação 
        // se retorno ok, direciona para home
        // se não exibe msg para o usuario
        axios.post('/api/home/login').then(response => console.log(response))

    } */
    // SEGUNDA MANEIRA ↓
   async function handleSignIn() {
        //chamada a API da nossa aplicação 
        // se retorno ok, direciona para home
        // se não exibe msg para o usuario
        
        try {
           await dispatch(signIn(email, password));
             navigate('/');
        } catch (error) {
          setErrorMessage(error.response.data.message);
        }
    }

    return(
        <Grid container className={classes.root}>
            <Grid item container  md={7} className="imageleft">
            <h2 className="titulo">Simplificando a forma de conectar desenvolvedores</h2>
                    
             <h4 className="subtitulo">Compartilhe seu conhecimento com toda nossa rede de desenvolvedores</h4>
            </Grid>

            <Grid item md={5}>
                <Box display={'flex'} flexDirection="column" alignItems={'center'} mt={5} >
                    <Avatar sx={{ bgcolor: indigo[600] }} className="avatar-acesso" >
                        <LockOutlinedIcon/>
                     </Avatar>

                     <Typography variant="h6" >
                         Acesso
                     </Typography>

                     <form className="form">
                         <TextField variant="outlined" margin="normal" required fullWidth id="email" label="E-mail" name="email" autoComplete="email" autoFocus value={email} onChange={(event) => setEmail(event.target.value)} />
                          
                         <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Senha" type="password" id="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value) } />

                         <Button fullWidth variant="contained" color="primary" className="btn-acessar" onClick={handleSignIn}>
                            Entrar
                         </Button>

                        {
                            errorMessage &&
                            <FormHelperText error>
                                  {errorMessage}  
                            </FormHelperText>
                        }

                        <Grid container >
                            <Grid item >
                                <Link>Esqueceu sua senha? </Link>
                            </Grid>
                                
                            <Grid item >
                                <Link>Não tem uma conta? Registre-se</Link>
                            </Grid>

                        </Grid>

                     </form>
                     <Copyright />
               
                </Box>  
            </Grid>
        </Grid>
    );
}

export default SignIn;