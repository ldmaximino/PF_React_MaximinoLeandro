import { Link } from 'react-router-dom';

import { priceFormat } from '../helpers/priceFormat';
import { Stock } from './Stock';

import '../styles/item.css';

export const Item = ({item}) => {
  
  return (
    <>
      
      <article className="articulos">
      <div className="articulos-img">
          <Link to={`/items/${item.codigo}`}>
          <img src={item.url1} alt={item.nombre} />
          <div className="texto-superpuesto">Acceder al Producto</div>
          </Link>
        </div>
        <div className="articulos-datos">
          <p className="articulos-datos-categoria">Categoría: {item.categoria}</p>
          <p className="articulos-datos-nombre">{item.nombre}</p>
          <p className="articulos-datos-precio">$ {priceFormat(item.precio)}</p>
          <Stock item={item} />
        </div>
      </article>
    </>
  );
 
}

