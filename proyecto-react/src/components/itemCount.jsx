import {  useState } from "react"
import { Link } from "react-router-dom";




const Contador = ({ stocks, onAdd }) => {


    const [contador, setContador] = useState(1)
    const [itemStock, setItemStock] = useState(stocks);
    const [visible, setVisible] = useState(true)

    const aumentar = () => {

        if (contador < itemStock) {
            setContador(contador + 1)
        }

    }
    const decrementar = () => {

        if (contador > 1) {
            setContador(contador - 1)
        }

    }
    const agregarAlCarrito = () => {

        if (contador <= itemStock) {
            onAdd(contador)
            setItemStock(itemStock - contador)
            setVisible(false)
            setContador(1)
           
        }


    }

    return (
        <>
            {visible ?
                <div className="container">
                    <div className="row ms-4">
                        <div className="col">
                            <div className="btn-group ms-4" role="group">
                                <button type="button" className="btn btn-dark rounded-start-pill" onClick={aumentar}>+</button>
                                <button type="button" className="btn btn-dark" >{contador}</button>
                                <button type="button" className="btn btn-dark rounded-end-pill" onClick={decrementar}>-</button>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col my-3 ms-5">
                            <button type="button" className="btn btn-dark rounded-pill" onClick={agregarAlCarrito} >Agregar Al Carrito</button>
                        </div>
                    </div>

                </div> : <Link  to={"/CarritoCompras"} className="btn btn-dark rounded-pill mb-4">Terminar Compra</Link> }
       </>

    )
}
export default Contador