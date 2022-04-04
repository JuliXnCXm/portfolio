import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../styles/Header.css'
const Header = () => {
    return (
        <div className="navbar--header">
            <h1 className='navbar--header__logo'>JUL.GE</h1>
            <Navbar className="navbar--menu" >
                <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/#contact">Contact</Nav.Link>
                <Nav.Link href="/#about">About Me</Nav.Link>
            </Navbar>
        </div>
    )
}

export default Header