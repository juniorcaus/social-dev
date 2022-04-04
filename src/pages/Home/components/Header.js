import React from "react";

import Button from '@mui/material/Button';

function Header() {
    return (
        <header className="Header">
                <div className="toolbar">
                    <div className="">
                        <span>SOCIAL DEV</span>
                    </div>
                    <div className="">
                    <Button variant="contained"> Novo Post </Button>
                        <span>img 1</span>
                        <span>img 2</span>

                    </div>
                </div>
            </header>
    );
}

export default Header;