import Contador from "./itemCount";


const ItemDetail = ({ item }) => {
    return (
        <div className="container m-5">
            <div className="row">
                <div className="col-md-5 offset-md-3">
                    <img className="img-fluid" src={item.rutaImagen} alt={item.nombre} />
                </div>
                <div className="col-4">
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                    <Contador />
                    <div class="alert alert-light" role="alert">
                       Hasta 6 cuotas sin interés con todos los bancos
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ItemDetail