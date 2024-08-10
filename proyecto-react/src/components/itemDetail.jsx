import { useContext } from "react";
import Contador from "./itemCount";
import { CartContext } from "./Context";


const ItemDetail = ({ item }) => {
    const { addItem} = useContext(CartContext)
   
    const onAdd = (quantity) => (
        console.log("cantidad" + quantity),
        addItem(item,quantity)
    )


    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-5 offset-md-3">
                    <img className="img-fluid rounded" src={item.rutaImagen} alt={item.nombre} />
                </div>
                <div className="col-4">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                    
                    <div className="col-4 ms-5 d-flex mb-4 justify-content-center">
                        <button className=" talles2  me-2 bg-white text-black border  rounded-2">S</button>
                        <button className="  talles2  me-2 bg-white text-black  border  rounded-2">M</button>
                        <button className="  talles2  me-2 bg-white text-black  border  rounded-2">L</button>
                        <button className=" talles2  me-2 bg-white text-black border  rounded-2">XL</button>

                    </div>
                    <Contador stocks={10} onAdd={onAdd} />
                    <div className="bg-light">
                    
                  
                       
                        <img src="https://i.pinimg.com/736x/ec/2e/aa/ec2eaa18dfbaef7ad250d0f750bb4b1b.jpg" alt="" width={25} height={25} />
                        Hasta 6 cuotas sin interés con cualquier banco
                    </div>
                   
                </div>

            </div>
        </div>
    )
}
export default ItemDetail