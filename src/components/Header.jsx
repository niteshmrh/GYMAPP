import React from 'react';
import logo from "../assets/logo.png"
import "./Header.css"
function Header(props) {
    return (
        <div>
            <div className='header'>
                <img src={logo} className="logo" alt="logo"/>           
                <ul className="header-menu">
                    <li>Home</li>
                    <li>Programs</li>
                    <li>Why Us</li>
                    <li>Plans</li>
                    <li>Testimoidals</li>
                </ul>           
            </div>
        </div>
    );
}

export default Header;