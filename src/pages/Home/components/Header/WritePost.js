import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function WritePost() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/post/new');
    }
return (
    <Button variant="contained" onClick={handleClick}> 
    Novo Post 
    </Button> 
);
}

export default WritePost;