import React from 'react';
import AuthNav from '../components/auth-nav';
//import NavBar from '../components/nav-bar';
//import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';
import "../index.css"

/*
const Navbar = () => {
return (
	<>
	<nav className="navbar navbar-expand-lg navbar-ligth fixed-top shadow-sm" id="mainNav">
		    <NavMenu>
		        <NavLink to='/' >
			        Home
		        </NavLink>
                <NavLink to='/info'>
                    Info
                 </NavLink>
		    </NavMenu>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		                <AuthNav></AuthNav>
		        </button>
	</nav>
	</>
);
};*/

const Navbar = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <div className="container px-5">
                <a className="navbar-brand fw-bold" href="#page-top">Event-Me</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#About">About</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#GetStarted">Get Started</a></li>
                    </ul>
                        <span className="d-flex align-items-center">
                            <i className="bi-chat-text-fill me-2"></i>
                            <AuthNav></AuthNav>
                        </span>
                </div>
            </div>
        </nav>
        </>
    )
};

export default Navbar;
