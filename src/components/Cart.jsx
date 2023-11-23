import { useContext,useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { priceFormat } from '../helpers/priceFormat';
import '../styles/cart.css';

export const Cart = () => {
  const { carrito, setCarrito } = useContext(CartContext);
  
  const deleteItem = (itemID) => {
    const nuevoCarrito = [...carrito];
    const carritoActualizado = nuevoCarrito.filter((item) => item.codigo !== itemID)
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
    return priceFormat(carrito.reduce((acum, it) => acum + (it.precio * it.cantidad), 0));
 }

  return (
    <>
      <div className="cart-container">
        {     
          carrito.map((item) => (
          <article className="cart-article" key={item.codigo}>
                <img className="cart-article-img" src={item.url1} alt={item.nombre} />
                <div className="cart-article-data">
                    <p>{item.nombre}</p>
                    <p>{item.categoria}</p>
                </div>
                <div className="cart-article-cantidad">
                    <span>{item.cantidad}</span>
                    <p>{(item.cantidad === 1) ? "unidad" : "unidades"}</p>
                </div>
                <p className="cart-article-precio">$ {priceFormat(item.cantidad * item.precio)}</p>
                <button className="cart-article-delete" onClick={() => deleteItem(item.codigo)}><img className="cart-article-trash" src="../src/assets/delete.png" alt="Eliminar Producto" /></button>
            </article>

          )) 
        }
      </div>
      
      { carrito.length > 0 &&
      <>
        <div className="cart-total">
          <p className="cart-total-label">Total: </p>
          <p className="cart-total-price">$ {totalCarrito()}</p>
        </div>
        <div className="cart-pie">
          <button className="cart-vaciar" onClick={vaciarCarrito}>Vaciar</button>
          <button className="cart-finalizarCompra">Finalizar</button>
        </div>
      </>
      }
      { carrito.length === 0 && 
        <h2 className="cart-vacio">Carrito Vacío!!</h2>
      }
    </>
  )
}
