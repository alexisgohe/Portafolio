import React from "react";
import "../stylesheets/NavBar.scss";
import logoDeveloperCode from "../images/logo1.png";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon2.svg";
import navIcon3 from "../images/nav-icon4.svg";
import { IoMdMenu } from "react-icons/io";
import Boton from "./Boton";
import pdfFile from "../files/pdf/CV_AlexisGomez.pdf";

const NavBar = () => {
  return (
    <section className="navbar-container">
      <div className="developercode-logo-container">
        <a href="">
          <img
            src={logoDeveloperCode}
            className="developercode-logo"
            alt="Logo de Developer Code"
          />
        </a>
      </div>
      <div className="navbar-toggle">
        <span className="navbar-toggle-icon">
          <IoMdMenu />
        </span>
      </div>
      <div className="navbar-collapse">
        <div className="navbar-text">
          <a className="navbar-text-menu" href="#home">
            Inicio
          </a>
          <a className="navbar-text-menu" href="#experience">
            Experiencia
          </a>
          <a className="navbar-text-menu" href="#portafolio">
            Mi portafolio
          </a>
          <a className="navbar-text-menu" href="#resume">
            Sobre Mi
          </a>
          <a className="navbar-text-menu" href="#contact-me">
            Contacto
          </a>
        </div>
        <span className="navbar-link">
          <div className="redes-sociales-icon">
            <a
              className="circulo"
              href="https://www.linkedin.com/in/alexis-gh/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-red-social"
                src={navIcon1}
                alt="Logo de Linkedin"
              />
            </a>
            <a
              className="circulo"
              href="https://github.com/alexisgohe/alexisgohe"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-red-social"
                src={navIcon3}
                alt="Logo de Github"
              />
            </a>
            <a
              className="circulo"
              href="https://www.facebook.com/alexisgohe/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="logo-red-social"
                src={navIcon2}
                alt=" Logo de Facebook"
              />
            </a>
          </div>
          <form action={pdfFile} target="_blank">
            <Boton text="Descargar CV"></Boton>
          </form>
        </span>
      </div>
    </section>
  );
};

export default NavBar;
