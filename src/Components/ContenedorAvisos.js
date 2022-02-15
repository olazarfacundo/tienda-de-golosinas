import React from "react"
import imgSinTacc from "../img/aptoceliaco.png"

export default function ContenedorAvisos(){
    return(
        <>
        <div className="contenedor-avisos">
            <div className="envio-gratis">
                <h4>Envio gratis</h4>
                <p>En todos nuestros pedidos a partir de <b>$2000.</b></p>
            </div>
            <div className="medios-de-pago">
                <h4>Medios de pago</h4>
                <p>Tarjeta de debito, credito o Mercado Pago.</p>
            </div>
            <div className="contenedor-sin-tacc">
                <h4>Productos sin tacc</h4>
                <p>Podes buscarlos con el logo <img src={imgSinTacc}/> o la categoria "Sin tacc".</p>
            </div>
        </div>
        </>
    )
}