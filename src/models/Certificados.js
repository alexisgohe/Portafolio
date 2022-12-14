import React from 'react'
import { certificados } from "./DatosResume";

function Certificados() {
  return (
    <React.Fragment>
      <div className="panel-derecho">
      {certificados.map(({ titulo, descripcion, logo }, index) => (
        <div 
        className="contenedor-educacion"
        key={index}>
          <div className="education-logo">
            <img className="logo-experiencia" src={logo} alt="Logo" />
          </div>
          <div className="education-description">
            <h3 className="encabezado-description">{titulo}</h3>
            <p className="texto-description"> {descripcion} </p>
          </div>
        </div>
      ))}
    </div>
  </React.Fragment>
  )
}

export default Certificados;