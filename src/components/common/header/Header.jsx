import React from 'react';
import { Navbar } from '../../common';
import Logo from './logo.jpg';

import './Header.css';

function Header () {

    return (
        <section className="header">
            <section className="header-logo">
                    Alexander Todd Norton
                    <img className="logo" src={Logo} alt="logo"/>
                    </section>
                    <div className="navbar">
                    <Navbar/>
                    </div>
                    <div className="links">
                        <a href="/">About Me</a>
                        <a href="/">Portfolio</a>
                        <a href="/">Contacts</a>
                        <a href="/">Resume</a>
                    </div>
            
    </section>
            
    
        
    )
}

export default Header;