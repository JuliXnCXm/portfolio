import React from 'react'
import logo_twitter from '../assets/icons/twitter_s.svg'
import logo_linkedin from '../assets/icons/linkdin_s.svg'
import logo_github from '../assets/icons/github_s.svg'
import logo_google from '../assets/icons/google_s.svg'
import foto from '../assets/foto.jpg'
import '../styles/Hero.css'
import Header from './Header'

const Hero = () => {
    return (
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
                    <button className="hero-container__button">Contact Me</button>
                </div>
            </div>
    )
}

export default Hero