import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import './Homescreen.css';


function Homescreen() {
    return (
        <div className="home_screen">
            <Nav />
            
            <Banner />
        </div>
    )
}

export default Homescreen;
