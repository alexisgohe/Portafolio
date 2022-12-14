import React from "react";
import Idioma from "./Idioma";
import { items } from "./DatosResume";

export default function Parent() {
  return (
    <div className="panel-derecho">
      {items.map((skill) => {
        return (
          <Idioma
            key={skill.id}
            icon={skill.icon}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        );
      })}
    </div>
  );
}
