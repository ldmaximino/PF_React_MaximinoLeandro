import { createContext,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

   const [carrito, setCarrito] = useState([]);

   const agregarAlCarrito = (item,cantidad) => {
      const itemAgregado = { ...item, cantidad };
      const nuevoCarrito = [...carrito]; /* Se crea el array nuevoCarrito para poder pushearlo entre otras cosas*/
      const itemExistente = nuevoCarrito.find((prod) => prod.codigo === itemAgregado.codigo);
      if (itemExistente) {
         itemExistente.cantidad += cantidad;
      } else {
         nuevoCarrito.push(itemAgregado);
      }
      setCarrito(nuevoCarrito);
      
   };

   const cantidadCarrito = () => {
      return carrito.reduce((acum, it) => acum + it.cantidad, 0); //actualiza la cantidad del CartWidget
   }

   return (
      <CartContext.Provider value={ { carrito, setCarrito, agregarAlCarrito, cantidadCarrito } }>
         {children /* children trae todo lo que está encerrado entre el <CartProvider></CartProvider> en App.jsx */}
      </CartContext.Provider>
   )
};

