import { useState } from "react"
import arrayProductos from "../components/json/productos2.json"


const Promocion = () => {

    const [product, setProduct] = useState(arrayProductos)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/9b2a473c-c28f-4aff-bdd2-9650fd42b7d8___4ec106d1bcf4d00204e0573038449ee2.jpg" alt="promocion" />
                    </div>
                </div>
            </div>
            <div className="container2  m-4">
                <div className="row">
                    {product.map(producto => (
                        <div key={producto.id} className="col-3">
                            <div className="card border-0">
                                <img className="imagen img-fluid" src={producto.rutaImagen} alt={producto.nombre} />
                                <p className=" m-2 text-danger">SALE</p>
                                <div className="card-body  text center">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.descripcion}</p>

                                    <div className="precios">
                                        <p className="card-precio3">${producto.precio}</p>
                                        <p className="card-precio2">${producto.precio2}</p>
                                    </div>
                                    <Contador stock ={10} />

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    )
}
export default Promocion