import imgSinTacc from "../img/aptoceliaco.png"

const ProductItem = ({ data, agregarAlCarrito, sacarDelCarrito }) => {
    let { id, nombre, precio, imagen, aptoCeliaco } = data
    return (
        <div className="tarjeta">
            <img className="imagenes" src={imagen} />
            {aptoCeliaco ? <img src={imgSinTacc} className="sin-tacc"/> : ""}
            <div>
                <h4>{nombre}</h4>
            </div>
            <div>
                <p>${precio}</p>
            </div>
            <div>
                <button onClick={() => agregarAlCarrito(id)}>Agregar</button>
            </div>
        </div>
    )
}

export default ProductItem
