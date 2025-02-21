import React from "react"
import usuario from "../assets/fotos/aths-portifolio-black.jpg";

const About = () => {
    return(
        <div className="about">
            <div className="flex">
                <div className="about__text">
                    <h1>Sobre mim<span>.</span></h1>
                    <p>Atualmente, estou no 7º período do curso de Ciência da Computação na UNIVASF. Ao longo da minha trajetória acadêmica, adquiri experiência em diversas áreas, incluindo desenvolvimento web com JavaScript, React, Node.js e Vite, ciência de dados com Python, bancos de dados utilizando MySQL Workbench e programação orientada a objetos em Java.</p>
                    <p>No meu tempo livre, gosto de praticar esportes, como futsal e vôlei, assistir animes e quando possivel gosto de jogar com meus amigos.</p>
                </div>
                <div className="about__img">
                <img src={usuario} alt="Foto de perfil" />
                </div>
            </div>
        </div>
    )
}
export default About