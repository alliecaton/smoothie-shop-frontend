import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
        <div>
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/smoothie">Build a Smoothie</Link></li>
            </ul>
        </div>
    </nav>  
    );
}

export default NavBar;
