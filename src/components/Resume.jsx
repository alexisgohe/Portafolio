import React from 'react'
import NavPage from '../models/NavPage'
import Sidebar from '../models/Sidebar'
import Titulo from '../models/Titulo'
import '../stylesheets/Resume.scss'

function Resume() {
  return (
    <section className='resume-container'>
      <Titulo text="Sobre mi" parrafo="Un poco de mi formación" />
      <div className="sidebar-section">
        <Sidebar />
        <NavPage />
      </div>
    </section>
  )
}

export default Resume