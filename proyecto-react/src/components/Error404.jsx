import { Link } from "react-router-dom"

const Error404 = () => {
    return(
       <div className="container">
        <div className="row">
            <div className="col text-center">
                <img src="https://tse2.mm.bing.net/th?id=OIP.vvRNDCT3TjdrPhP5eNgO1QHaG7&pid=Api&P=0&h=180" alt="" width={100}/>
                <h1>ERROR</h1>
                <h1>404</h1>
                <h3>Esta Pagina No Existe!</h3>
                <Link to={"/"}>
                                <button className="btn btn-dark rounded-pill my-4">Volver Al Inicio</button>
                </Link>

            </div>
        </div>
       </div>
    )
} 
export default Error404