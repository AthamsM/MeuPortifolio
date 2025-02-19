import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Header = () =>{
    return (
        <div className='header' >
            <div className='flex'>
                <div className='headerLink'>
                    <Link to="/">Início</Link>
                    <Link to="/skill">Especialidades</Link>
                    <Link to="/about">Sobre-mim</Link>
                </div>
                <div className='headerLink'>
                    <a href="https://www.linkedin.com/in/athams-337346274/"><FontAwesomeIcon className='header__icon' icon={faLinkedin} /></a>
                    <a href="https://github.com/AthamsM/" ><FontAwesomeIcon className='header__icon' icon={faGithub} /></a>
                    <a href="mailto:athamsmenezes@gmail.com"><FontAwesomeIcon className='header__icon' icon={faEnvelope} /></a>
                </div>
            </div>
        </div>
    )
}
export default Header