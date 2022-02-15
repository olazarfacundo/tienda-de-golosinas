import React, { useReducer, useState } from "react";
import { carritoReducer, initialStateCarrito } from "../reducers/carritoReducer";
import { types } from "../acciones/accionesCarrito";
import Compras from "./Compras"
import ListaDeProductos from "./ListaDeProductos"

export default function Carrito(props) {

    const [mostrarCarrito, setMostrarCarrito] = useState(false)

    const [state, dispatch] = useReducer(carritoReducer, initialStateCarrito)

    const { productos, carrito } = state

    const agregarAlCarrito = (id) => {
        dispatch({ type: types.AGREGAR_AL_CARRITO, payload: id })
    }

    const sacarDelCarrito = (id, all = false) => {
        if (all) {
            dispatch({ type: types.QUITAR_TODOS_DEL_CARRITO, payload: id })
        } else {
            dispatch({ type: types.QUITAR_UNO_DEL_CARRITO, payload: id })
        }
    }

    const limpiarCarrito = () => {
        dispatch({ type: types.LIMPIAR_CARRITO })
    }

    const toggleCarrito = () => {
        setMostrarCarrito(prev => !prev)
    }

    const cantidadElementos = () => {
        let cantidad = 0
        carrito.forEach(e => cantidad += (e.cantidad))
        return cantidad
    }

    return (
        <>
            <div className="contenedor">
                <ListaDeProductos
                    busqueda={props.busqueda}
                    busquedaCategoria={props.busquedaCategoria}
                    productos={productos}
                    sacarDelCarrito={sacarDelCarrito}
                    agregarAlCarrito={agregarAlCarrito}
                />
            </div>
            {carrito.length > 0 ?
                <div className="div-flotante">
                    <div className="carrito-flotante">
                        <span onClick={toggleCarrito} className="carrito-cartel">
                           {mostrarCarrito ? "Ocultar" : "Ver"} compra ({cantidadElementos()}) </span>
                        {mostrarCarrito ?
                            <Compras
                                carrito={carrito}
                                sacarDelCarrito={sacarDelCarrito} agregarAlCarrito={agregarAlCarrito}
                            />
                            : ""}
                    </div>
                </div>
                : ""}

        </>
    )
}