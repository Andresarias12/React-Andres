import CartWidget from "./CartWidget"
import LeonWidget from "./LeonWidget"

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar2">
            <div className="container-fluid">
                <LeonWidget/>
                <a className="navbar-brand" href="#">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Sucursales</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Indumentaria</a></li>
                                <li><a className="dropdown-item" href="#">Accesorios</a></li>
                                <li><a className="dropdown-item" href="#">Deportivo</a></li>
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
    
