import React from 'react';
import Logo from './google_logo.png'
import { Navbar } from 'react-bootstrap';

function Header(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" >
                    <img
                        alt=""
                        src={Logo}
                        width="65"
                        height="33"
                        className="d-inline-block align-top"
                    />{' '}
                    <span style={{fontSize:'20px', marginLeft:'4px'}}>Technology_News</span> 
                    </Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Header;