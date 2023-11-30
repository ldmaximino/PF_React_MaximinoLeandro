import { useContext,useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { priceFormat } from '../helpers/priceFormat';
import { toCapitalLetter } from "../helpers/toCapitalLetter";
import { FormOrder } from "./FormOrder";

import '../styles/cart.css';
import { Link } from "react-router-dom";

export const Cart = () => {
  const { carrito, setCarrito } = useContext(CartContext);
  
  const deleteItem = (itemID) => {
    const nuevoCarrito = [...carrito];
    
    const carritoActualizado = nuevoCarrito.filter((item) => item.id !== itemID)
    setCarrito(carritoActualizado);
    if(carritoActualizado.length === 0) {
      setTimeout(() => {
        window.location.href = '/'
      }, 800);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setTimeout(() => {
      window.location.href = '/'
    }, 800);
  };

  const totalCarrito = () => {
    return priceFormat(carrito.reduce((acum, it) => acum + (it.price * it.cantidad), 0));
  }

  
  return (
    <>
      <div className="cart-container">
        {     
          carrito.map((item) => (
          <article className="cart-article" key={item.id}>
                <img className="cart-article-img" src={item.url1} alt={item.name} />
                <div className="cart-article-data">
                    <p>{item.name}</p>
                    <p>{toCapitalLetter(item.category)}</p>
                </div>
                <div className="cart-article-cantidad">
                    <span>{item.cantidad}</span>
                    <p>{(item.cantidad === 1) ? "unidad" : "unidades"}</p>
                </div>
                <p className="cart-article-precio">$ {priceFormat(item.cantidad * item.price)}</p>
                <button className="cart-article-delete" onClick={() => deleteItem(item.id)}><img className="cart-article-trash" src="../src/assets/delete.png" alt="Eliminar Producto" /></button>
            </article>

          )) 
        }
      </div>
      
      { carrito.length > 0 &&
      <>

        <div className="cart-pie">
          <button className="cart-vaciar" onClick={vaciarCarrito}>Vaciar Carrito</button>
          <div className="cart-total">
            <p className="cart-total-label">Total: </p>
            <p className="cart-total-price">$ {totalCarrito()}</p>
          </div>
          
          <Link to="/form" onClick={<FormOrder />}><button className="cart-finalizarCompra">Confirmar Orden</button></Link>
        </div>
      </>
      }
      { carrito.length === 0 && 
        <h2 className="cart-vacio">Carrito Vacío!!</h2>
      }
    </>
  )
}
