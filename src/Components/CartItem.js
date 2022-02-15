import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const CartItem = ({ data, sacarDelCarrito, agregarAlCarrito }) => {
    let { id, nombre, precio, cantidad, imagen } = data
    return (
        <div className="producto-carrito">
            <img src={imagen} />
            <div className="producto-carrito-info">
                <p className="producto-carrito-nombre">{nombre} </p>
                <div className="producto-carrito-cantidad">
                    <FontAwesomeIcon icon={faMinusCircle} className="icono" onClick={() => sacarDelCarrito(id)} />
                    <span>{cantidad}</span>
                    <FontAwesomeIcon icon={faCirclePlus} className="icono" onClick={() => agregarAlCarrito(id)} />
                </div>
                <p className="producto-carrito-precio">${precio * cantidad}</p>
            </div>

        </div>

    )
}

export default CartItem
