import React from "react";
import "../stylesheets/Footer.scss";
import LogoDeveloper from "../images/logo.png";

export default function Footer() {
  return (
    <section className="container">
      <div className="container-footer">
        <div className="footer-menu">
          <div className="f-menu">
            <a href="/">Privacy policy</a>
            <a href="/">Cookies</a>
            <a href="/">Help</a>
            <a href="/">FQAs</a>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="copy">&copy; DevelopersCode, All Right Reserved.</p>
          <img
            className="logo-developers"
            src={LogoDeveloper}
            alt="Logo de Developers Code"
          />
          <p className="designed">Designed By AGH</p>
        </div>
      </div>
    </section>
  );
}
