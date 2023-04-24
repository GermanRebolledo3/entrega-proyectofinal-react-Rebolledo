import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
function NavBar(){
    const { cart } = useContext(cartContext);
    return(
            <nav className="wrapper">
                <Link to="/"><h1 className="logo">Tapicerias Rebolledos</h1></Link>
                <ul className="menu">
                    <Link to="/">
                    <li>
                    Todos los productos
                    </li>
                    </Link>
                    <Link to="/category/Banquetas">
                    <li>
                    Banquetas
                    </li>
                    </Link>
                    <Link to="/category/Sillas">
                    <li>
                    Sillas
                    </li>
                    </Link>
                    <Link to="/category/Sillones">
                    <li>
                    Sillones
                    </li>
                    </Link>
                    
                    <Link to="/cart">
                    <li>
                        
                            <i className="bi bi-cart-fill"></i>
                        
                        <span className="cartWidget_count"> Carrito {cart.length}</span>
                    </li>
                    </Link>
                </ul>
            </nav>
    )
}

export default NavBar;