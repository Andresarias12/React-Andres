import { useContext, useState } from "react"
import { CartContext } from "./Context"
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const { carrito, totalProductos, sumaProductos, carritoVacio } = useContext(CartContext)
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState()


    const generarOrden = () => {
        if (nombre == "") {
            return false
        }

        if (telefono == "") {
            return false
        }

        if (email == "") {
            return false
        }

        const fecha = new Date()

        const order = {
            buyer: { nombre: nombre, telefono: telefono, email: email },
            items: carrito.map(item => ({ id: item.id, nombre: item.nombre, precio: item.precio })),
            date: `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumaProductos()
        }

        const db = getFirestore()
        const ordersCollection = collection(db, "ordenes")
        addDoc(ordersCollection, order).then(respuesta => {
            setOrderId(respuesta.id)
            carritoVacio()
        })

        console.log(order)
    }


    if (totalProductos() == 0 && orderId) {
        return (
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-dark p-5" role="alert">
                        <img className="bg-secondary" src="https://tse4.mm.bing.net/th?id=OIP.wJiRgxBW2ympOBeIgF_HIwHaHa&pid=Api&P=0&h=180" alt="" width={70} />
                        <h3>Gracias por su compra!</h3>
                        <p>Su numero de compra: <b>{orderId}</b></p>
                        <Link to={"/"}>
                            <button className="btn btn-dark rounded-pill">Volver Al Inicio</button>
                        </Link>

                    </div> : ""}
                </div>
            </div>
        )
    }



    if (totalProductos() == 0) {

        return (
            <>
                <div className="container my-5">
                    <div className="row">
                        <div className="col text-center">
                            <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwIltRB98LyiTHaSlP3fO1tD5mDxQLmjR8w&s" width={90} /></p>
                            <h2>Tu Carrito Esta Vacio</h2>
                            <p>Te ayudamos a encontrar lo que buscas </p>
                            <Link to={"/"}>
                                <button className="btn btn-dark rounded-pill">Volver Al Inicio</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        )


    } else {
        return (
            <>
                <div className="container m-5">
                    <div className="row">
                        <div className="col" key={carrito.id}>
                            <form key={carrito.id}>
                                <div className="mb-3">
                                    <label htmlFor="Nombre" className="form-label">Nombre Completo</label>
                                    <input type="nombre" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label">Email</label>
                                    <input type="email" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Telefono" className="form-label">Telefono</label>
                                    <input type="telefono" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                                </div>


                                <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                            </form>
                        </div>

                        <div className="col">
                            <table className="table">
                                <tbody key={carrito.id}>


                                    {carrito.map(item => (

                                        <tr key={item.id}>
                                            <td className="align-middle"><img src={item.rutaImagen} alt={item.nombre} width={38} /></td>
                                            <td> <p className=" align- middle text-center" >{item.nombre}</p></td>
                                            <td className="align-middle text-center">${item.precio * item.quantity}</td>


                                        </tr>

                                    ))}
                                    <tr>
                                        <td className="align-middle text-center" colSpan={3}>Costo Total:</td>
                                        <td className="align-middle text-center">${sumaProductos()}</td>


                                    </tr>


                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>

            </>
        )
    }


}

export default Checkout