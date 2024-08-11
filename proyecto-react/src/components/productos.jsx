import { useContext, useEffect, useState } from "react"
import arrayProductos from "../components/json/productos1.json"
import { Link, useParams } from "react-router-dom"
import Contador from "./itemCount"
import NikeExperience from "./NikeExperience"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import Loading from "./Loading"



const Productos = () => {


    const [produ, setProdu] = useState(arrayProductos);
    const { id } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "productos");
        getDocs(itemsCollection).then(carlos => {

            if (carlos.size > 0) {
                setProdu(carlos.docs.map(documento => ({ id: documento.id, ...documento.data() })))
            } else {
                console.error("No existe la coleccion!")
            }



        })



    }, [])

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "productos");
        const q = id ? query(itemCollection, where("categoria", "==", id)) : itemCollection;
        getDocs(q).then(carlos => {

            if (carlos.size > 0) {
                setProdu(carlos.docs.map(documento => ({ id: documento.id, ...documento.data() })))
            } else {
                console.error("No existe la coleccion!")
            }



        })

    }, [id])



    return (

        <>
            <NikeExperience />
            < div className="container m-5" >
                <div className="row">

                    {produ.map(produc => (

                        <div key={produc.id} className="col-3">
                            <div className="card border-0">
                                <Link to={"/item/" + produc.id}>
                                    <img className="img-thumbnail" src={produc.rutaImagen} alt={produc.nombre} />
                                </Link>
                                <div className="card-body  text center">
                                    <h4 className="card-title">{produc.nombre}</h4>
                                    <p className="card-text">{produc.descripcion}</p>
                                    <p className="card-precio">${produc.precio}</p>


                                </div>


                            </div>

                        </div>


                    ))}




                </div>



            </div>

        </>
    )


}
export default Productos