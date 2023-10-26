import { Link } from "react-router-dom";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { AiOutlineInfoCircle } from "react-icons/ai";
import logo from '../assets/logo.png'

function NavBar() {
    return (
        <nav className="nav">
            <Link className="nav-logo" to={"/"}>
                <img src={logo}/>
            </Link>
            <div className="nav-links">
                <Link to={"/"}><p>INICIO</p></Link>
                <Link to={"/tienda/autos"}><p>TIENDA</p></Link>
                <Link to={"/eventos"}><p>EVENTOS</p></Link>
                <Link to={"/foro"}><p>FORO</p></Link>
                <Link to={"/admin"}><p>ADMIN</p></Link>
            </div>
            <div className="nav-icons">
                <span><FaCartShopping/></span>
                <span><FaUser/></span>
                <span><AiOutlineInfoCircle/></span>
            </div>
        </nav>
    );
}

export default NavBar;