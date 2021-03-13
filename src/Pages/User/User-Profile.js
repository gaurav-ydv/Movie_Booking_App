// Dependencies Installed
// npm install react-router-dom
// npm install react-icons
// npm install --save styled-components
 
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar_UserProfile from './Navbar/Navbar_UserProfile'
import {NavBtnLink} from './Navbar/Navbarcp'
import FileUpload from './Avatar'


const User_Profile = () => {
    return (
            <>
            <Router>
            <Navbar_UserProfile/>
            </Router>
            <table width="100%">
                <tr>
                    <td>
                        <div>
                        <h2>Profile Picture</h2>
                        </div>
                        <div>
                        <FileUpload/>
                        </div>
                    </td>
                    <td>
                        <div>
                        <div>
                        <label>Full Name:</label>
                        </div> 
                        <div>
                        <input type="name"></input>
                        </div>
                        <br/>
                        <div>
                        <Router><NavBtnLink to="/">Update</NavBtnLink></Router>
                        </div>
                        <br/>
                        <div>
                        <label>Email:</label>
                        </div>
                        <div>
                        <input type="email"></input>
                        </div>
                        </div>
                        <br/>
                        <div>
                        <div>
                        <label>Pasword:</label>
                        </div>
                        <div>
                        <input type="pasword"></input>
                        </div>
                        <br/>
                        <div>
                        <Router><NavBtnLink to="/">Update</NavBtnLink></Router>
                        </div>
                        </div>
                    </td>
                </tr>          
            
            </table>
            </>
    )
}

export default User_Profile

