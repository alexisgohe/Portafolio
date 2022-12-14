import React from "react";
import {Route, Routes} from "react-router-dom"
import Certificados from "./Certificados";
import Escuela from "./Escuela";
import Parent from "./Parent";
import SobreMi from "./SobreMi";
import Trabajo from "./Trabajo";

function NavPage() {
  return (
    <React.Fragment>
        <Routes>
          <Route path="/portafolio" element={<SobreMi/>}/>
          <Route path="/escuela" element={<Escuela/>}/>
          <Route path="/trabajo" element={<Trabajo/>}/>
          <Route path="/idioma" element={<Parent/>}/>
          <Route path="/certificados" element={<Certificados/>}/>
        </Routes>
    </React.Fragment>
  );
}

export default NavPage;
