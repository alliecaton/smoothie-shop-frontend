import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { HiShoppingCart } from 'react-icons/hi';
import { Container } from 'react-bootstrap'

const NavBar = () => {
    return (
    <Container className="nav-bar-edit">
        <Navbar bg="light" expand="lg" >
             <Link to="/">
             <Navbar.Brand>
                <svg className="svg-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"
                viewBox="-100 -50 600 600" xmlns="preserve">
                <defs>  
                        <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" > 

                            <stop offset="0%" stopColor="#6666ff">
                                <animate attributeName="stop-color" values="#6666ff; #01FF89; #6666ff" dur="4s" repeatCount="indefinite"></animate>
                            </stop>

                            <stop offset="100%" stopColor="#01FF89">
                                <animate attributeName="stop-color" values="#01FF89; #6666ff; #01FF89" dur="4s" repeatCount="indefinite"></animate>
                            </stop>

                        </linearGradient> 
                    </defs>
                    <path fill="url('#logo-gradient')" d="M426,0h-84c-6.88,0-12.992,4.416-15.168,10.944l-12.96,38.848C293.552,38.816,270.672,32,246,32
                        c-73.92,0-134.304,56.224-142.368,128H102c-17.632,0-32,14.368-32,32v32c0,17.632,14.368,32,32,32h1.888l30.24,241.984
                        c0.992,8,7.808,14.016,15.872,14.016h192c8.064,0,14.88-6.016,15.872-14.016L388.112,256H390c17.632,0,32-14.368,32-32v-32
                        c0-17.632-14.368-32-32-32h-1.632c-4.064-36.192-21.28-68.16-47.136-91.168L353.52,32H426c8.832,0,16-7.168,16-16S434.832,0,426,0
                        z M327.888,480H164.112l-28-224h219.744L327.888,480z M390,192v32H102v-32h16h256H390z M356.4,160.032H135.632
                        C143.472,105.888,189.744,64,246,64c21.152,0,40.736,6.24,57.632,16.48l-8.8,26.464c-2.816,8.384,1.728,17.44,10.112,20.224
                        C306.64,127.744,308.336,128,310,128c6.688,0,12.928-4.224,15.168-10.944l4.8-14.368
                        C343.856,118.56,353.232,138.208,356.4,160.032z"/>
                </svg> <span className="line">|</span>
            </Navbar.Brand>
            </Link>
            

            <Link className="nav-text" to="/smoothie">BUILD A SMOOTHIE</Link>

        <Navbar.Collapse className="justify-content-end">
            <Link to="/cart">
                <HiShoppingCart />
            </Link>
        </Navbar.Collapse>


    </Navbar>  
    </Container>
    );
}

export default NavBar;
