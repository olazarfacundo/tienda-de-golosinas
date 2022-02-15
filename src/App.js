import React, { useState } from "react"
import productos from "./productos"
import Carrito from "./Components/Carrito"
import ContenedorAvisos from "./Components/ContenedorAvisos"
import logo from "./img/logo.png"
import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

function App() {

  const [busqueda, setBusqueda] = useState("")

  const conseguirCategorias = () => {
    let categorias = ["Sin tacc"]
    productos.forEach(e => {
      categorias.push(e.categoria)
    })
    let categoriasListas = Array.from(new Set(categorias))
    return categoriasListas
  }

  const categorias = conseguirCategorias()

  const [busquedaCategoria, setBusquedaCategoria] = useState("")

  const categoriasOptions = categorias.map((e, index) => {
    return <option key={index}>{e}</option>
  })

  return (
    <div>
      <div className="header">

        <div className="header-contenido">
          <div className="header-logo">
            <img src={logo} />
          </div>
          <div className="header-info">
            <div className="header-info-marca">
              <div className="header-info-marca-dos">
                <h1>Tienda de golosinas</h1>
                <p> <a target="_blank" href="https://www.google.com.ar/maps/place/Sarmiento+601,+C1041AAM+CABA/@-34.6045047,-58.3775452,17z/data=!3m1!4b1!4m5!3m4!1s0x95bccacd97a2fe97:0xdaa717b7685aacf6!8m2!3d-34.6045047!4d-58.3753565"> <FontAwesomeIcon icon={faLocationDot} /> Sarmiento 601, Buenos Aires </a> </p>
                <p>Horarios 9:30 a 18:30hs</p>
              </div>
              <div className="header-social-media">
                <div><FontAwesomeIcon icon={faInstagram} /></div>
                <div><FontAwesomeIcon icon={faFacebook} /></div>
                <div><FontAwesomeIcon icon={faTwitter} /></div>
                <div><FontAwesomeIcon icon={faWhatsapp} /></div>
              </div>
            </div>
            <div className="header-info-herramientas">
              <select onChange={(event) => setBusquedaCategoria(event.target.value)}>
                <option>Categorias</option>
                {categoriasOptions}
              </select>
              <input
                onChange={(event) => setBusqueda(event.target.value)}
                placeholder="Buscar"
              />
            </div>
          </div>
        </div>

      </div>
      <ContenedorAvisos/>
      <Carrito busqueda={busqueda} busquedaCategoria={busquedaCategoria} />
    </div>
  )
}

export default App