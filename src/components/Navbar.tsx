import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper teal accent-3 px1">
                <a href="/" className="brand-logo">React + TS</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;