import React from 'react'
import { BsLinkedin, BsYoutube, BsGithub } from "react-icons/bs";

const Footer = () => <div className="footer-container">

    <div className="footer-data">
        <div className="knowus-container">
            <h3 className='title-footer'>Conocenos</h3>
            <div className="links-footer-container">
                <a href="#" className="footer-link">Conocenos</a>
                <a href="#" className="footer-link">Nuestras Tiendas</a>
            </div>
        </div>
        <div className="Politicas-container">
            <h3 className='title-footer'>Politicas</h3>
            <div className="links-footer-container">
                <a href="#" className="footer-link">Politicas de Privacidad</a>
                <a href="#" className="footer-link">Anuncie Aqui</a>
            </div>

        </div>
        <div className="help-container">
            <h3 className='title-footer'>Podemos Ayudarte</h3>
            <div className="links-footer-container">
                <a href="#" className="footer-link">Programa de Fidelidad</a>
                <a href="#" className="footer-link">Quiero ser franquiciado</a>
            </div>

        </div>
    </div>

    <form className="form-talkus-container">
        <h2 htmlFor="" className="form-label">Hable con nosotros</h2>
        <input type="text" placeholder='Name' className="name-form input-form" />
        <textarea name="" id="" cols="30" rows="7" placeholder='Escribe un mensaje' className="form-textarea input-textarea"></textarea>
        <a href="" className="button button-form">Enviar Mensaje</a>
    </form>

    <div className="developer-info">
        <span>&copy; 2023 Desarrollado por <a href="http://alhanisespinal.web.app">Alhanis Espinal</a></span>
        <div className="socials-container">
            <a href="https://www.linkedin.com/in/alhanis-carolina-espinal-flores/"><BsLinkedin className='social-icon' /></a>
            <a href="https://github.com/SevenDogsNTwoCats"><BsGithub className='social-icon' /></a>
            <a href="https://www.youtube.com/@alhanisespinalflores9432"><BsYoutube className='social-icon' /></a>
        </div>
    </div>



</div>

export default Footer