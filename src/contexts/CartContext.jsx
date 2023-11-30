import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

   const [carrito, setCarrito] = useState([]);

   const agregarAlCarrito = (item, cantidad) => {
      const itemAgregado = { ...item, cantidad };
      const nuevoCarrito = [...carrito]; /* Se crea el array nuevoCarrito para poder pushearlo y no mutar el original (carrito). Personalmente me resulta más práctico y más legible este método que el visto en clase */
      const itemExistente = nuevoCarrito.find((prod) => prod.id === itemAgregado.id);

      itemExistente
         ? itemExistente.cantidad += cantidad
         : nuevoCarrito.push(itemAgregado); /* se hizo el push sin mutar el array original carrito */

      setCarrito(nuevoCarrito);
   };

   const cantidadCarrito = () => {
      return carrito.reduce((totAcum, valAct) => totAcum + valAct.cantidad, 0); //actualiza la cantidad del CartWidget
   }

   return (
      <CartContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, cantidadCarrito }}>
         {children /* children trae todo lo que está encerrado entre el <CartProvider></CartProvider> en App.jsx */}
      </CartContext.Provider>
   )
};

