import React from 'react'
import logo_twitter from '../assets/icons/twitter_s.svg'
import logo_linkedin from '../assets/icons/linkdin_s.svg'
import logo_github from '../assets/icons/github_s.svg'
import logo_google from '../assets/icons/google_s.svg'
import foto from '../assets/foto.jpg'
import '../styles/Hero.css'
import Header from './Header'
import Modal from './Modal'
import ContactForm from './ContactForm'

const Hero = () => {
    const [show, setShow] = React.useState(false)

    const handleClick = () => {
        setShow(true)
    }

    const handleClose= () => {
        setShow(false)
    }


    return (
        <>
            <div className="hero">
                <Header/>
                <div className='hero-container'>
                    <img src={foto} alt="" />
                    <div className="icons">
                        <img src={logo_twitter} alt="" />
                        <img src={logo_github} alt="" />
                        <img src={logo_linkedin} alt="" />
                        <img src={logo_google} alt="" />
                    </div>
                    <button className="hero-container__button" onClick={handleClick}>Contact Me</button>
                </div>
            </div>
            {show ?
                <Modal>
                    <ContactForm handleClose={handleClose}/>
                </Modal>
                : null
            }
        </>
    )
}

export default Hero