import { useContext } from 'react';
import { Link } from 'react-router-dom';

import cartW from '../assets/cart.png';
import { CartContext } from '../contexts/CartContext';

import '../styles/navBar.css';

export const CartWidget = () => {
  const { cantidadCarrito } = useContext(CartContext);
  console.log(cantidadCarrito());
  return (
    <Link className={`${(cantidadCarrito() === 0) ? "cart-disabled" : ""}`} to="/carrito">
      <div className="cart">
          <img className="cart-img" src={cartW} alt="Carrito de Compras" />
          <p>{cantidadCarrito()}</p>
      </div>
    </Link>
  )
}
