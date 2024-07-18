import { useState } from "react"

const Contador = ({ stock }) => {

    const [contador, setContador] = useState(1)
    const [itemStock, setItemStock] = useState(stock);

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

            setItemStock(itemStock - contador)
            setContador(1)

        }


    }

    return (
        <div className="container">
            <div className="row ms-4">
                <div className="col">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-dark rounded-start-pill"  onClick={aumentar}>+</button>
                        <button type="button" className="btn btn-dark" >{contador}</button>
                        <button type="button" className="btn btn-dark rounded-end-pill"  onClick={decrementar}>-</button>
                    </div>
                </div>
            </div>
            <div className="agregar  row my-2 ms-3 mt-2">
                <div className="col">

                    <button type="button" className="btn btn-dark rounded-pill" onClick={agregarAlCarrito}> Agregar al Carrito </button>

                </div>
            </div>
        </div>
    )
}
export default Contador