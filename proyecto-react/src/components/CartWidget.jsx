import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./Context"

const CartWidget = () => {

  const { totalProductos } = useContext(CartContext)

 
    return (
      <>
        <Link to={"/CarritoCompras"}>
          <div>
            <button type="button" className="btn btn-light position-relative">
              <img className="imagen2" src="https://static.vecteezy.com/system/resources/previews/016/314/413/non_2x/shopping-cart-free-png.png" alt="CartWidget" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProductos()}</span>
            </button>

          </div>
        </Link>

      </>
    )
   }


export default CartWidget