import React from "react";
import { escuela } from "./DatosResume";

function Escuela() {
  return (
    <React.Fragment>
      <div className="panel-derecho">
        {escuela.map(({ grado, institucion, resume, anio }, index) => (
          <div 
          className="contenedor-educacion"
          key={index}>
            <div className="education-description">
              <h3 className="encabezado-description">{grado}</h3>
              <p className="texto-description"> {institucion} </p>
              <p className="texto-description"> {resume} </p>
            </div>
            <div className="education-year">
              <p className="texto-year"> {anio} </p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Escuela;
