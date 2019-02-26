import React from 'react';
import './App.css';

const Navbar = () => {

    return (
        <div className="navArea">
            <div className="navLink">
                <a>header</a>
            </div>
            <div className="navLink">
                <a>body</a>
            </div>
            <div className="navLink">
                <a>footer</a>
            </div>
        </div>
    )
}

export default Navbar;