import React from 'react'
import {Nav , NavBtnLink , NavLink , NavMenu , Bars , NavBtn} from './Navbarcp';
import Logo from './Logo.png'

const Navbar_UserProfile = () => {
    return (
        <>
        <Nav>
        <NavLink to="/">
        <img src={Logo} alt="Logo" width="" height="75px" />
        </NavLink>
        <Bars/>
        <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Now Showing</NavLink>
        <NavLink to="/">Coming Soon</NavLink>
        <NavLink to="/">Previous Purchases</NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to="/">Log Out</NavBtnLink>
        </NavBtn>
        </Nav>
        </>
    );
}

export default Navbar_UserProfile
