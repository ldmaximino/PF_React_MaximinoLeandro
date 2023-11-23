import { toCapitalLetter } from "../helpers/toCapitalLetter";
import { Item } from "./Item"

import '../styles/itemList.css';

export const ItemList = ({items, categoria}) => {
  const cantidad = items.length;
  let descripcion = "";
  categoria 
    ? descripcion = toCapitalLetter(categoria) + ": "
    : descripcion = "Total Productos: ";

  return (
    <>
      <h3 className="itemList-title">{descripcion} {cantidad}</h3>
      <div className="section-products">
        {items.map(item => <Item key={item.codigo} item={item}/>)}
      </div>
    </>
  )
}
