import CartWidget from "./CartWidget"
import LeonWidget from "./LeonWidget"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar2">
            <div className="container-fluid">
                <LeonWidget/>
                <Link className="navbar-brand" to={"/"}>Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/promociones"}>Promociones</Link>
                        </li>
                    
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to={"/category/calzado"}>Calzado</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to={"/category/ropa"}>Ropa</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to={"category/accesorios"}>Accesorios</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                   <CartWidget/>
                   
                </div>
            </div>
        </nav>

    )
}

export default Navbar
