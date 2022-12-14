import React from "react";
import Titulo from "../models/Titulo";
import "../stylesheets/Portafolio.scss";
import { AiOutlineHeart } from "react-icons/ai/";
import proyectos from "../models/DatosProyecto";

function Portafolio() {
  return (
    <section className="portafolio-container">
      <Titulo
        text="Portafolio"
        parrafo="Esto es un poco de mi trabajo como Front End Developer"
      />
      <div className="portfolio-content">
        {proyectos.map(({ imagen, tipo, texto }, index) => (
          <div className="portafolio-card" key={index}>
            <img
              className="imagen-proyecto"
              src={require(`../images/portafolio${imagen}.jpg`)}
              alt="Foto del proyecto"
            />
            <div className="main-row">
              <h6>{tipo}</h6>
              <AiOutlineHeart />
            </div>
            <div className="texto-titulo">
              <h3 className="texto-descripcion">{texto}</h3>
            </div>
            <a href="." className="link-text">
              Ver más...{" "}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portafolio;
