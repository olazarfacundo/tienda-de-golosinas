import { types } from "../acciones/accionesCarrito";
import productos from "../productos"

const lista = []

const elementos = productos.map(e => {
    lista.push(e)
}) 

export const initialStateCarrito = {
    productos: lista,
    carrito: []
}

export function carritoReducer(state, action) {
    switch (action.type) {
        case types.AGREGAR_AL_CARRITO: {

            let nuevoItem = state.productos.find(item => item.id === action.payload)

            let itemEnCarrito = state.carrito.find(item => item.id === nuevoItem.id)

            return itemEnCarrito ? {
                ...state,
                carrito: state.carrito.map((item) => item.id === nuevoItem.id ? { ...item, cantidad: item.cantidad + 1 } : item),
            } : {
                ...state,
                carrito: [...state.carrito, { ...nuevoItem, cantidad: 1 }]
            }
        }
        case types.QUITAR_UNO_DEL_CARRITO: {
            let itemPorBorrar = state.carrito.find(item => item.id === action.payload)

            return itemPorBorrar.cantidad > 1 ? {
                ...state,
                carrito: state.carrito.map(item => item.id === action.payload ? {
                    ...item, cantidad: item.cantidad - 1
                } : item)
            } : {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== action.payload)
            }
        }
        case types.QUITAR_TODOS_DEL_CARRITO: {
            return {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== action.payload)
            }
        }
        case types.LIMPIAR_CARRITO: {
            return initialStateCarrito
        }
        default:
            return state
    }
}