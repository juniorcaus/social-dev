import React from "react";
import { makeStyles } from '@material-ui/styles';
import  './style.css';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';


const useStyles = makeStyles({
    root: {
        marginBottom: 4,
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
                // image: {height: 300,width: '100%',maxWidth: '100%',},
                // content: {padding: 0,}
                // caption: { marginRight: 2, } - editado no arquivo CSS
});

function PostCard({ post }) {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardHeader 
            avatar={<Avatar src={post.author.avatar} />}  
            title={ <Typography variant="h6"> {post.title} </Typography> }  
            subheader={ 
            <div className={classes.subheader}>
                <Typography variant="caption" className="caption" >
                    {'Avaliado por:'} 
                </Typography> 
                
                <Typography variant="subtitle2" className="caption" >
                    {post.author.name} 
                </Typography>   

                <Typography variant="caption" className="caption" >
                    {post.date} 
                </Typography> 

            </div> 
             } 
             />
            <CardContent className="content" >
            <Typography variant="body1" className="message" >
                    {post.hashtags} 
                </Typography>  

                <CardActionArea>
                    <img  src={post.image} className="image" alt="" />
                </CardActionArea>

            </CardContent>

            <CardActions disableSpacing>
                    <IconButton aria-label="like" >
                        <FavoriteIcon />
                        <Typography style={{ cursor: 'pointer' }} color='secondary.main' variant="body2">
                            {'10'}
                        </Typography>
                    </IconButton>     

                    <IconButton aria-label="comment" >
                        <MessageIcon />
                        <Typography className="reactions" color='secondary.main' variant="body2">
                            {'30'}
                        </Typography>
                    </IconButton>     

                    <IconButton aria-label="favorite" className="favorite" >
                        <BookmarkIcon />
                    </IconButton>     
            </CardActions>

        </Card>
    );
}

export default PostCard;