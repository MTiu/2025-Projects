import React from 'react'
import {Nav, Navbar} from "react-bootstrap"
import { Link, useLocation } from 'react-router';

export default function Header() {
    
    const location = useLocation();

return (
    <Nav className="p-4">
        <Navbar className="d-flex gap-4">
            <Link to="/" className={`frame ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`frame ${location.pathname === '/about' ? 'active' : ''}`}>About Me</Link>
            <Link to="/gallery" className={`frame ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
        </Navbar>
    </Nav>
)
}