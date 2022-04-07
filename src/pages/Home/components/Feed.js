import React from "react";
import { makeStyles } from '@material-ui/styles';

import PostCard from "../../../components/PostCard";



const useStyles = makeStyles({
    root: {
        
    }
});

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'jcaus',
            username: 'juniorcaus',
            avatar: '../../../img/avatars/rick.png',
        },
        title: "Criando app do zero com React.js",
        date: "April 7, 2022",
        description: 'fala pessoal, qual o framework favorito de vcs?',
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "/src/img/posts/post9.jpeg",
    },
    {
        id:2,
        author: {
            id: 1,
            name: 'jcaus',
            username: 'juniorcaus',
            avatar: './src/img/avatars/rick.png',
        },
        title: "comparativo entre React.js e Vue.js - performace",
        date: "April 1, 2022",
        description: 'quero criar um bootcamp gratuito',
        hashtags: "#framework, #javascript, #reactjs, #vue",
        image: "/src/img/posts/post8.png",
    }
];


function Feed () {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
           
        </div>
    );
}

export default Feed;