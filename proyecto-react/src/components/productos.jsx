import { useEffect, useState } from "react"
import arrayProductos from "./json/productos1.json"
import { Link, useParams } from "react-router-dom"
import Contador from "./itemCount"
import NikeExperience from "./NikeExperience"


const Productos = () => {

    const [produ, setProdu] = useState(arrayProductos)
    const { id } = useParams()
    useEffect(() => {
        setProdu(id ? arrayProductos.filter(produ => produ.categoria == id) : arrayProductos)
    }, [id])



    return (

        <>
            <NikeExperience />
            < div className="container m-5" >
                <div className="row">
                    {produ.map(produc => (

                        <div key={produc.id} className="col-md-4 mb-3">
                            <div className="card border-0">
                                <Link to={"/item/" + produc.id}>
                                    <img className="img-thumbnail" src={produc.rutaImagen} alt={produc.nombre} />
                                </Link>


                                <div className="card-body  text center">
                                    <h5 className="card-title">{produc.nombre}</h5>
                                    <p className="card-text">{produc.descripcion}</p>
                                    <p className="card-precio">${produc.precio}</p>
                                    <Contador stock={10} />


                                </div>

                            </div>
                        </div>


                    ))}


                </div>
            </div >

        </>


    )


}
export default Productos