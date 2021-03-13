import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sign_Up from "./Sign-Up";
import Admin_Profile from './Pages/Admin/Admin-Profile'
import User_Profile from './Pages/User/User-Profile'

ReactDOM.render(
  <React.StrictMode>
    <User_Profile/>
  </React.StrictMode>,
  document.getElementById('root')
);


