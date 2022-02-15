import React from "react"
import CartItem from "./CartItem"

export default function Compras(props) {

    const elementos = props.carrito.map((e, index) => {
        return (
            <CartItem
                key={index}
                data={e}
                sacarDelCarrito={props.sacarDelCarrito}
                agregarAlCarrito={props.agregarAlCarrito}
            />
        )
    })

    const precioTotal = () => {
        let precio = 0
        props.carrito.forEach(e => precio += (e.precio * e.cantidad))
        return precio
    }


    const text = props.carrito.reduce((mensaje, producto) => mensaje.concat(`* ${producto.nombre} - $${producto.precio * producto.cantidad}\n`), ``).concat(`\nTotal: $${precioTotal()}`)

    return (
        <div className="contenedor-carrito">
            <ul>
                {elementos}
                <li className="footer-carrito">
                    <div> <span className="total-compra"> Total: ${precioTotal()} </span> <small> {precioTotal() > 2000 ? <li>Envio gratis</li> : ""}</small></div>
                    <div className="terminar-compra">
                        <a target="_blank" href={`https://wa.me/5491126275658/?text=${encodeURIComponent(text)}`}>Terminar compra</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}