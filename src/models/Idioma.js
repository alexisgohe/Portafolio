import React, {useState, useEffect} from 'react'

export default function Idioma({icon, skill, percentage}) {
  const [style, setStyle] = useState();

  useEffect(() =>{
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${percentage}`,
      };
      setStyle(newStyle);
    }, 500);
  }, [percentage])

  return (
        <div className='categoria'>
          <div className="container">
            <div className="panel-left">
              {icon}
            </div>
            <div className="panel-right">
              <h2 className='skill-text'>{skill}</h2>
              <div className="skill-bar">
                <div className="progress" style={style}>
                  <span>{percentage}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
