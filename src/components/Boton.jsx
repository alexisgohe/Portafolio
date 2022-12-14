import React from "react";
import "../stylesheets/Boton.scss";

function Boton({ text, type, click }) {
  return (
    // <button className="cv-btn">Descargar CV</button>
    <div className="container-btn">
      <button type={type} className="btn" onClick={click}>{text}</button>
    </div>
  );
}

export default Boton;
