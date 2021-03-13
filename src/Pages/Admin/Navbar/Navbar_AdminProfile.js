import React from 'react'
import {Nav , NavBtnLink , NavLink , NavMenu , Bars , NavBtn} from './Navbarcp';
import Logo from './Logo.png'

const Navbar_AdminProfile = () => {
    return (
        <>
        <Nav>
        <NavLink to="/">
        <img src={Logo} alt="Logo" width="" height="75px" />
        </NavLink>
        <Bars/>
        <NavMenu>
        <NavLink to="/">Screens</NavLink>
        <NavLink to="/">Movies</NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to="/">Log Out</NavBtnLink>
        </NavBtn>
        </Nav>
        </>
    );
}

export default Navbar_AdminProfile
