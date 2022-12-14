import React from 'react'
import '../stylesheets/Home.scss'
import Boton from './Boton'
import Yo from "../images/yo.jpg"
import pdfFile from "../files/pdf/CV_AlexisGomez.pdf"

export default function Home() {
  return (
    <section className='home-container'>
      <div className="home-text">
        <span className='text-slogan'>Bienvenido a mi Portafolio</span>
        <h1 className='home-encabezado'>Soy un Front End Developer</h1>
        <p className='home-texto'>Tengo 2 años desarrollando páginas y diseños web. Me encanta desarrollar paginas usando React como biblioteca</p>
        <form action={pdfFile} target="_blank">
          <Boton text="Portafolio 🡪" />
        </form>
      </div>
      <div className="home-imagen">
        <img className='logo-perfil' src={Yo} alt="Foto de Alexis" />
      </div>
    </section>
  )
}
