import React from 'react';
import './App.css';

const Navbar = (props) => {

    return (
        <div className="navArea">
            <div className="navLink">
                <p onClick={props.activeHeader}>HEADER</p>
            </div>
            <div className="navLink">
                <p onClick={props.activeProjects}>PROJECTS</p>
            </div>
            <div className="navLink">
                <p onClick={props.activeContact}>CONTACT</p>
            </div>
        </div>
    )
}

export default Navbar;