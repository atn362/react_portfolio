import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink>
                        Alexande Norton
                    </NavLink>
                    <NavLink>
                       About Me
                    </NavLink>
                    <NavLink>
                        Portfolio
                    </NavLink>
                    <NavLink>
                        Contact
                    </NavLink>
                    <NavLink>
                        Resume
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}