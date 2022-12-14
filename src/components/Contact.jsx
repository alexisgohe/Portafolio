import React from "react";
import "../stylesheets/Contact.scss";
import Titulo from "../models/Titulo";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon2.svg";
import navIcon3 from "../images/nav-icon4.svg";
import Boton from "./Boton";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xaykdoja");
  if (state.succeeded) {
    alert("Formulario Enviado");
    document.getElementById("contact").reset();
  }

  return (
    <section className="contact-container">
      <Titulo text="Contacto" parrafo="" />
      <div className="container-form">
        <div className="contact-info">
          <h3 className="tittle-info">Mas Información</h3>
          <div className="contact-list">
            <ul className="lista-form">
              <li>
                <FaPhoneAlt />
                (228) 3 175 641
              </li>
              <li>
                <IoMdMail />
                alexisgh74@gmail.com
              </li>
            </ul>
          </div>
          <div className="contact-icons">
            <a
              className="enlace-logo"
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
              className="enlace-logo"
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
              className="enlace-logo"
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
        </div>
        <div className="contact-form">
          <form id="contact" className="contact" onSubmit={handleSubmit}>
            <span className="row-form">
              <label htmlFor=""></label>
              <input type="text" name="Nombre" placeholder="Nombre" />
            </span>
            <span>
              <label htmlFor="email"></label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Correo"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </span>
            <span>
              <label htmlFor=""></label>
              <input type="tel" name="Telefono" placeholder="Telefono" />
            </span>
            <span>
              <label htmlFor=""></label>
              <input type="text" name="Asunto" placeholder="Asunto" />
            </span>
            <span>
              <label htmlFor=""></label>
              <textarea id="message" name="message" placeholder="Mensaje" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </span>
            <Boton text="Enviar" type="submit"></Boton>
          </form>
        </div>
      </div>
    </section>
  );
}
