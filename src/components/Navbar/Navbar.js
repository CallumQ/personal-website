import React from 'react';
import {NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
const Navbar = () => {
    return ( 
        <div>
            <nav className="nav">
                <ul className="nav-links">
                    <NavLink exact to="/home" activeClassName="active">Home</NavLink>
                    <NavLink exact to="/about" activeClassName="active">About</NavLink>
                    <NavLink exact to="/projects" activeClassName="active">Projects</NavLink>
                    <NavLink exact to="/cv" activeClassName="active">CV</NavLink>
                    <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                    <NavLink exact to="/blog" activeClassName="active">Blog</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;