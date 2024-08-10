const Footer = () => {
    return (
        <div className="container-fluid text-white bg-black py-3" id="footer">
            <div className="row">
                <div className="col">
                    <p>
                        © 2023 Southbay S.R.L. Todos los derechos reservados.</p>
                </div>
                <div className="col">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link text-white"  href="#">Hot Sale</a>
                        </li>
                        <li className="nav-item">
                            <a  href="#" className="nav-link text-white">Terminos y Condiciones</a>
                        </li>
                        <li className="nav-item">
                            <a  className="nav-link text-white" href="#">Politica y Privacidad</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer