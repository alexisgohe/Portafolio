import React from "react";
import "../stylesheets/Experience.scss";
import Titulo from "../models/Titulo";
import experience from "../models/DatosExperience";

function Experience() {

  return (
    <section className="experience-container">
      <Titulo text="Experiencia" parrafo="Estas son las tecnologías con las que he trabajado" />
      <div className="container-technologies">
        {experience.map(({ id, title, src, style }) => (
          <div 
            className={`technologies ${style}`} 
            key={id}
            style={{ borderBottom: `4px solid ${style}`, 
                    borderRight: `1px solid ${style}`, 
                    borderLeft: `1px solid ${style}` }}>
              <img className="logo-experiencia" src={src} alt={title} />
              <h3 className="texto-experiencia">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
