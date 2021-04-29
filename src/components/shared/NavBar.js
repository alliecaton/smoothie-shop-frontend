import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
        <div>
            <Link to="/">Home</Link>
            
            <ul>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/smoothie">Build a Smoothie</Link></li>
            </ul>
        </div>
    </nav>  
    );
}

export default NavBar;
