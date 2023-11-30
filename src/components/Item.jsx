import { Link } from 'react-router-dom';

import { priceFormat } from '../helpers/priceFormat';
import { Stock } from './Stock';
import { toCapitalLetter } from '../helpers/toCapitalLetter';

import '../styles/item.css';

export const Item = ({ item }) => {

  return (
    <>
      <article className="articulos">
        <div className="articulos-img">
          <Link to={`/items/${item.id}`}>
            <img src={item.url1} alt={item.name} />
            <div className="texto-superpuesto">Acceder al Producto</div>
          </Link>
        </div>
        <div className="articulos-datos">
          <p className="articulos-datos-categoria">Categoría: {toCapitalLetter(item.category)}</p>
          <p className="articulos-datos-nombre">{item.name}</p>
          <p className="articulos-datos-precio">$ {priceFormat(item.price)}</p>
          <Stock item={item} />
        </div>
      </article>
    </>
  );

}

