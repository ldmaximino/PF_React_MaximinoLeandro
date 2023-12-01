import { useContext, useState } from "react";

import { CartContext } from "../contexts/CartContext";

import '../styles/itemCounter.css';

export const ItemCounter = ({ item , cantDisponible,initial }) => {
  const [cantidad, setCantidad] = useState(initial);
  const { agregarAlCarrito } = useContext(CartContext);

  const handleCounterSub = () => {
    (cantidad > 0) && setCantidad(prev => prev - 1);
  };

  const handleCounterAdd = () => {
    (cantidad < cantDisponible) && setCantidad((prev) => prev + 1);
  };

  const isSubButtonDisabled = cantidad === 0;
  const isAddButtonDisabled = cantidad === cantDisponible;

  return (
    <>
      <div className="item-counter">
        <button
          className={`sub ${isSubButtonDisabled ? "sub-disabled" : ""}`}
          onClick={handleCounterSub}
          disabled={isSubButtonDisabled}
        >
          -
        </button>
        <p className="number">{cantidad}</p>
        <button
          className={`add ${isAddButtonDisabled ? "add-disabled" : ""}`}
          onClick={handleCounterAdd}
          disabled={isAddButtonDisabled}
        >
          +
        </button>
      </div>
      <button
        className={`btn-agregar ${isSubButtonDisabled ? "btn-agregar-disabled" : ""}`}
        disabled={isSubButtonDisabled}
        onClick={() => { 
          agregarAlCarrito(item, cantidad),
          setCantidad(0)
        } /* Agrego una función flecha al onClick para poder pasar los argumentos item y cantidad. También seteo a cantidad = 0 */}
      >
        Añadir al Carrito
      </button>
    </>
  );
};
