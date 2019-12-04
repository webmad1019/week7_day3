import React from 'react';
import './nav.css'

import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="nav-style">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/route-with-props'>Route with props</Link></li>
                <li><Link to='/route-with-redirect'>Route with redirect</Link></li>
                <li><Link to='/lifecycle'>React Lifecycle</Link></li>
            </ul>
        </nav>
    )
}

export default navbar;