import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { SiGoogletranslate } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";

function Sidebar() {
  const datos = [
    {
      title: "Educación",
      path: "/escuela",
      icon: <IoIosSchool />,
    },
    {
      title: "Trabajo",
      path: "/trabajo",
      icon: <MdWork />,
    },
    {
      title: "Idioma",
      path: "/idioma",
      icon: <SiGoogletranslate />,
    },
    {
      title: "Certificados",
      path: "/certificados",
      icon: <TbCertificate />,
    },
  ];

  return (
    <React.Fragment>
      <div className="panel-izquierdo">
        {datos.map(({ title, path, icon }, index) => (
          <NavLink
            to={path}
            key={index}
            className={({ isActive }) =>
              isActive ? "sidebar-column seleccion" : "sidebar-column"
            }
          >
            <span>{icon}</span>
            <span className="tittle">{title}</span>
          </NavLink>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
