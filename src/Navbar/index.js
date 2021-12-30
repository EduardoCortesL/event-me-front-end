import React from 'react';
import AuthNav from '../components/auth-nav';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';


const Navbar = () => {
return (
	<>npm
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' >
			Home
		</NavLink>
        <NavLink to='/info'>
            Info
        </NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
        <NavBtnLink to='/signin'>Sign Up</NavBtnLink>
		<AuthNav></AuthNav>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
