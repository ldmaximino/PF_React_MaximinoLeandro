import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ItemCounter } from './ItemCounter';

import '../styles/stock.css';

export const Stock = ({item}) => {
  
  const { carrito } = useContext(CartContext);

  const cantEnCarrito = () => {
      const productoEncontrado = carrito.find((prod) => prod.id === item.id);
      return productoEncontrado ? productoEncontrado.orderedItems : 0; 
  }

  return (
    <>
      <div className="stock">        
        {(item.quantity > 0 && cantEnCarrito() > 0) ? <p className="stock-en-carrito">Carrito: {carrito.length > 0 && cantEnCarrito()}</p> : <p className="stock-en-carrito"> </p>}
        <p className={`stock-cantidad ${item.quantity === 0 ? " stock-text-agotado" : ""}`}>{(item.quantity === 0) ? " A  G  O  T  A  D  O " : `Stock: ${item.quantity}`}</p>
        {
          (item.quantity > 0 && cantEnCarrito() > 0) 
              ? <p className={`stock-disponible ${(item.quantity - cantEnCarrito()) === 0 ? "disponible-cero" : ""}`}>Disp: {item.quantity - cantEnCarrito()}</p> 
              : <p className="stock-disponible"> </p>
        }
      </div>
      <ItemCounter item={item} cantDisponible={item.quantity - cantEnCarrito()} initial={0} /> {/*En vez de pasar solo el stock del item, paso todo el {item} a ItemCounter porque después ItemCounter se lo pasa a la función agregaAlCarrito del CartContext.jsx */}
    </>
  )
}
