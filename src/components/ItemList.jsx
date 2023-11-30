import { toCapitalLetter } from "../helpers/toCapitalLetter";
import { Item } from "./Item"

import '../styles/itemList.css';

export const ItemList = ({items, category}) => {
  const cantidad = items.length;
  let descripcion = "";
  category
    ? descripcion = toCapitalLetter(category) + ": "
    : descripcion = "Total Productos: ";

  return (
    <>
      <h3 className="itemList-title">{descripcion} {cantidad}</h3>
      <div className="section-products">
        {items.map(item => <Item key={item.id} item={item}/>)}
      </div>
    </>
  )
}
