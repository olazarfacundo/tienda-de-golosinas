import React from "react"
import ProductItem from "./ProductItem"

export default function ListaDeProductos(props) {

    let productos = props.productos

    console.log(productos.filter(e => e.aptoCeliaco))
    let porNombre

    function normalizar(palabra) {
        return palabra.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
    }


    // props.busqueda.length > 3 ? productos = props.productos.filter(e => normalizar(e.nombre).includes(props.busqueda)) : productos = props.productos



    switch (props.busquedaCategoria) {
        case "":
            productos = props.productos
            break;
        case "Categorias":
            productos = props.productos
            break;
        case "Sin tacc":
            productos = productos.filter(e => e.aptoCeliaco)
            break;
        case `${props.busquedaCategoria}`:
            productos = productos.filter(e => e.categoria === `${props.busquedaCategoria}`)
            break;
        default:
            console.log("Default")
            break;
    }

    props.busqueda.length > 3 ? porNombre = productos.filter(e => normalizar(e.nombre).includes(normalizar(props.busqueda))) : porNombre = productos

    return (
        <>
            {porNombre.map((e) => <ProductItem key={e.id} data={e} agregarAlCarrito={props.agregarAlCarrito} sacarDelCarrito={props.sacarDelCarrito} />)}
            {/* {productos.map((e) => <ProductItem key={e.id} data={e} agregarAlCarrito={props.agregarAlCarrito} sacarDelCarrito={props.sacarDelCarrito} />)} */}
        </>
    )
}
