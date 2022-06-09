import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/Logo.png";
import github from "../../assets/github.png"
import linkdin from "../../assets/linkedin.png"
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='navbar-main sticky-top'>
            <div className='container'>
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink to="/"><img alt='logo' src={logo}></img></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className='nav-link'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className='nav-link'>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="https://drive.google.com/file/d/1EqpAqvIhxJAJQeqQGsdN6hkDwYlbvYHS/view?usp=sharing" target="_blank" className='nav-link resume'>Download Resume</a>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    );
};

export default Navbar;