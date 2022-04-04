import React from "react";
import './style.css';

import Header from "./components/Header";

function Home() {
    return (
        <div>
            <Header /> 
            <main className="main">
                <div className="navbar" >NAV BAR </div>
                <div className="feed">FEED</div>
            </main> 
            
        </div>
    );
}

export default Home;