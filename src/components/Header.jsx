import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import '../styles/Header.css'
const Header = () => {
    return (
        <div className="navbar--header">
            <img src="" alt="logo" />
            <Navbar className="navbar--menu" >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/aboutMe">About Me</Nav.Link>
            </Navbar>
        </div>
    )
}

export default Header