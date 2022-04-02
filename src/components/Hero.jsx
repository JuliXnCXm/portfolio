import React from 'react'
import logo_twitter from '../assets/icons/twitter_s.svg'
import logo_linkedin from '../assets/icons/linkdin_s.svg'
import logo_github from '../assets/icons/github_s.svg'
import logo_google from '../assets/icons/google_s.svg'
import foto from '../assets/foto.jpg'
import '../styles/Hero.css'
import Header from './Header'
import Modal from './Modal'
import Name from './Name'
import ContactForm from './ContactForm'

const Hero = () => {
    const [show, setShow] = React.useState(false)

    const handleClick = () => {
        setShow(true)
    }

    const handleClose= () => {
        setShow(false)
    }

    const handleCLickIcon = (e) => {
        window.location.href = `${e.target.dataset.provider}`
    }


    return (
        <>
            <div className="hero">
                <Header/>
                <div className='hero_div'>
                    <div className='hero-container'>
                        <img src={foto} alt="" />
                        <div className="icons">
                            <img src={logo_github} alt="" data-provider="https://github.com/JuliXnCXm" onClick={handleCLickIcon} />
                            <img src={logo_linkedin} alt="" data-provider="https://www.linkedin.com/in/camilo-garcia-escobar/" onClick={handleCLickIcon} />
                        </div>
                        <button className="hero-container__button" onClick={handleClick}>Contact Me</button>
                    </div>
                    <Name/>
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