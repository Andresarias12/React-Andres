import { useContext } from "react"
import { CartContext } from "./Context"
import { Link } from "react-router-dom"

const Carro = () => {
    const { removeItem, carrito, carritoVacio,totalProductos, sumaProductos } = useContext(CartContext)

    if (totalProductos() > 0) {
        return (

            <>
                <div className="container m-5">
                    <div className="row">
                        <div className="col">
                            <table key={carrito.id} className="table">
                                <tbody>

                                    <tr >
                                        
                                    <td className="text-end" colSpan={5}><button className="btn btn-danger rounded-pill"  onClick={carritoVacio}>Vaciar Carrito</button></td> 
                                        
                                    </tr>
                                    {carrito.map(item => (

                                        <tr key={item.id}> 
                                              
                                            <td className="align-middle"><img src={item.rutaImagen} alt={item.nombre} width={38} /></td>
                                            <td> <p className=" align- middle" >{item.nombre}</p></td>
                                            <td><b className="align-middle text-center">${item.precio * item.quantity}</b></td>
                                            <td className="align-middle text-center">Cantidad: {item.quantity}</td>
                                            <td><button onClick={() => { removeItem(item.id) }} className="bg-light align-middle text-end" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuSdwRI3FWZq4a9aSjNcVvpG2JQmX5BhbP4w&s" alt={item.nombre} width={22} /></button></td>

                                        </tr>

                                    ))}
                                    <tr>
                                        <td><b className="align-middle text-center" colSpan={3}>Costo Total:</b></td>
                                        <td><b className="align-middle text-center">${sumaProductos()}</b></td>
                                        <td>&nbsp;</td>
                                        <td><Link to={"/FinalizarCompra"} title="Ir al Checkout"><button className="btn btn-dark rounded-pill align-middle text-end">Finalizar Compra</button></Link> </td>

                                    </tr>
                                    


                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </>

        )
    }

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



}
export default Carro