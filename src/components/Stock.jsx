
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ItemCounter } from './ItemCounter';

import '../styles/stock.css';


export const Stock = ({item}) => {
  
  const { carrito } = useContext(CartContext);

  const cantEnCarrito = () => {
      const productoEncontrado = carrito.find((prod) => prod.codigo === item.codigo);
      return productoEncontrado ? productoEncontrado.cantidad : 0;
  }

  return (
    <>
      <div className="stock">        
        {(item.cantStock > 0 && cantEnCarrito() > 0) ? <p className="stock-en-carrito">Carrito: {carrito.length > 0 && cantEnCarrito()}</p> : <p className="stock-en-carrito"> </p>}
        <p className={`stock-cantidad ${item.cantStock === 0 ? " stock-text-agotado" : ""}`}>{(item.cantStock === 0) ? "AGOTADO" : `Stock: ${item.cantStock}`}</p>
        {
          (item.cantStock > 0 && cantEnCarrito() > 0) 
              ? <p className={`stock-disponible ${(item.cantStock - cantEnCarrito()) === 0 ? "disponible-cero" : ""}`}>Disp: {item.cantStock - cantEnCarrito()}</p> 
              : <p className="stock-disponible"> </p>
        }
      </div>
      <ItemCounter item={item} cantDisponible={item.cantStock - cantEnCarrito()} />
    </>
  )
}
