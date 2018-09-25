import React from 'react'
import './portafolio.css'
const Portafolio = () => {
  return (
    <div className="Portafolio">
      <h1>Sobre Mi.</h1>
      <div className="info">
        <div className="col4">
          <img src="../images/perfil.jpg" className="Perfil"></img>
        </div>
        <div className="col6 offset-6">
          <p>Soy Emanuel Torres Clemente, Nacido en San Juan de los Morros Venezuela, tengo 28 años de edad,
            soy Ing en Informática enfocado en el area del desarrollo web en la rama del Frontend... <a> ver mas..</a></p>
        </div>
      </div>
    </div>
  )
}

export default Portafolio;