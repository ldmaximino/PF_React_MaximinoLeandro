import { createContext, useEffect, useState } from "react";
import { priceFormat } from "../helpers/priceFormat";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {

   const [carrito, setCarrito] = useState(carritoInicial);

   const agregarAlCarrito = (item, orderedItems) => {
      const itemAgregado = { ...item, orderedItems };
      const nuevoCarrito = [...carrito]; /* Se crea el array nuevoCarrito para poder pushearlo y no mutar el original (carrito). Personalmente me resulta más práctico y más legible este método que el visto en clase */
      const itemExistente = nuevoCarrito.find((prod) => prod.id === itemAgregado.id);

      itemExistente
         ? itemExistente.orderedItems += orderedItems
         : nuevoCarrito.push(itemAgregado); /* se hizo el push sin mutar el array original carrito */

      setCarrito(nuevoCarrito);
   };

   const cantidadCarrito = () => {
      return carrito.reduce((totAcum, valAct) => totAcum + valAct.orderedItems, 0); //actualiza la cantidad del CartWidget
   }

   const vaciarCarrito = () => {
      setCarrito([]);
      setTimeout(() => {
        window.location.href = '/'
      }, 800);
    };
  
    
   const totalCarrito = () => {
      return priceFormat(carrito.reduce((acum, it) => acum + (it.price * it.orderedItems), 0));
   }

   useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(carrito));
   }, [carrito])
   
   
   return (
      <CartContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, cantidadCarrito, totalCarrito, vaciarCarrito }}>
         {children /* children trae todo lo que está encerrado entre el <CartProvider></CartProvider> en App.jsx */}
      </CartContext.Provider>
   )
};

