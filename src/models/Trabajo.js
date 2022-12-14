import React from 'react'
import { trabajo } from "./DatosResume";

function Trabajo() {
  return (
    <React.Fragment>
      <div className="panel-derecho">
      {trabajo.map(({ empresa, descripcion, anio }, index) => (
        <div 
        className="contenedor-educacion"
        key={index}>
          <div className="education-description">
            <h3 className="encabezado-description">{empresa}</h3>
            <p className="texto-description"> {descripcion} </p>
          </div>
          <div className="education-year">
            <p className="texto-year"> {anio} </p>
          </div>
        </div>
      ))}
    </div>
  </React.Fragment>
  )
}

export default Trabajo;