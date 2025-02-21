import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faPython,
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import TorneariaCentral from "../assets/fotos/TorneariaCentral.png";
import Isa from "../assets/fotos/Isa.png";


const projetos = [
  {
    id: 1,
    nome: "Isa",
    descricao: "Um sistema que identifica possíveis vulnerabilidades e ofere suporte durante a sua jornada acadêmica como professor ou aluno",
    tecnologias: ["React", "Vite", "Node.js", "MySQL", "Python"],
    github: "https://github.com/SamCatarina/isa",
    foto: Isa
  },
  {
    id: 2,
    nome: "Tornearia Central",
    descricao: "Site de uma oficina mecânica.",
    tecnologias: ["Python", "Pandas", "Django"],
    github: "https://github.com/AthamsM/Tornearia-Central",
    foto: TorneariaCentral
  }
];
const ferramentas = [
  {
    id: 1,
    nome: faJs,
    color: "#FFD43B"
  },
  {
    id: 2,
    nome: faPython,
    color: "#005cfa"
  },
  {
    id: 3,
    nome: faReact,
    color: "#74C0FC"
  },
  {
    id: 4,
    nome: faHtml5,
    color: "#f07400"
  },
  {
    id: 5,
    nome: faCss3,
    color: "#348fd5"
  },
  {
    id: 6,
    nome: faNodeJs,
    color: "#27e70d"
  },
  {
    id: 7,
    nome: faDatabase,
    color: "#3681ba"
  }
]

const Projects = () => {
  return (
    <div className="projetos">
      <div className="flex">
        <div className="projetos__skills">
          <div className="projetos__ferramentas">
            <h2>Ferramentas</h2>
            {ferramentas.map((ferramenta) =>(
               <div key={ferramenta.id} className="ferramenta-container">
               <FontAwesomeIcon className="projetos__icon" icon={ferramenta.nome} style={{ color: ferramenta.color, }} />
             </div> 
            ))}
          </div>
          <div className="projetos__interesses">
            <h2>Meus Interesses</h2>
            <ul>
              <li>Full Stack</li>
              <li>Banco de dados</li>
              <li>Ciencia de Dados</li>
            </ul>
          </div>
        </div>
        <div className="projetos__projeto">
          <h2>Projetos</h2>
          <div className="projetos-container">
            {projetos.map((projeto) => (
              <div key={projeto.id} className="projetos-card">
                <img src={projeto.foto} alt="Isa" />
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
                <p><strong>Tecnologias:</strong> {projeto.tecnologias.join(", ")}</p>
                <a href={projeto.github} target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
export default Projects