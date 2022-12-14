import udemy from "../images/udemy.png";
import edteam from "../images/edteam.png";
import open from "../images/openbootcamp.png";
import free from "../images/freecode.png";
import { TbWritingSign } from "react-icons/tb";
import { AiOutlineRead } from "react-icons/ai";
import { HiVolumeUp } from "react-icons/hi";
import { FiHeadphones } from "react-icons/fi";

export const escuela = [
  {
    grado: "Universidad Veracruzana",
    institucion: "Licenciatura en Sistemas Computacionales Administrativos",
    resume:
      "Finalice con promedio de 8.42, con énfasis en Administración de Tecnologías de la Información y la Comunicación.",
    anio: "2015 - 2019",
  },
  {
    grado: "Bachillerato",
    institucion: "Escuela De Bachilleres Enrique Laubscher",
    resume: "Finalice con promedio de 8.6, en el área de Humanidades.",
    anio: "2012 - 2015",
  },
];

export const trabajo = [
  {
    empresa: "Hospital Angeles Xalapa",
    descripcion:
      "Actualmente llevo laborando 3 años en el Hospital Angeles Xalapa en el puesto de Operador en Sistemas, donde me encargo del mantenimiento preventivo y correctivo en servidores, computadoras, impresoras a nivel general, CCTV y telefonía VoIP. También estoy encargado de las redes y comunicaciones.",
    anio: "2019 – Act.",
  },
];

export const certificados = [
  {
    titulo: "Diseño Web Profesional",
    descripcion:
      "Curso tomado en Udemy donde se enseñó HTML5, CSS3, Responsive Design, Figma, SASS, JavaScript, jQuery, Bootstrap 5, WordPress, Git, GitHub.",
    anio: "2022",
    logo: udemy,
  },
  {
    titulo: "Programación desde cero",
    descripcion:
      "Curso tomado en EDteam donde se vieron los fundamentos básicos de la programación.",
    anio: "2022",
    logo: edteam,
  },
  {
    titulo: "HTML y CSS Básico",
    descripcion:
      "Curso tomado en OpenBootcamp donde se enseñó HTML5, CSS3, Responsive Design, SASS y Bootstrap 5.",
    anio: "2022",
    logo: open,
  },
  {
    titulo: "Curso de React Con Proyectos",
    descripcion:
      "Curso donde se mostraron los fundamentos de React en este curso desde cero, así como la creación de 4 proyectos de practica",
    anio: "2022",
    logo: free,
  },
];

export const items = [
  {
    id:1,
    icon: <TbWritingSign/>,
    skill: "Escrito",
    percentage: "70%",
  },
  {
    id:2,
    icon: <AiOutlineRead/>,
    skill: "Leído",
    percentage: "80%",
  },
  {
    id:3,
    icon: <HiVolumeUp/>,
    skill: "Hablado",
    percentage: "60%",
  },
  {
    id:4,
    icon: <FiHeadphones/>,
    skill: "Escuchado",
    percentage: "70%",
  },
]