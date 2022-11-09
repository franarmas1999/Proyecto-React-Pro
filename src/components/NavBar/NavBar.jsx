//COMPONENTE NAVBAR

import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-menu">
      <h3>TAKONES SHOES</h3>
      <CartWidget className="cart-icon" />
    </nav>
  );
}

export default NavBar;
