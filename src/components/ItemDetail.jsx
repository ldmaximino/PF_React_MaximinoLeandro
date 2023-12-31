import { priceFormat } from '../helpers/priceFormat';
import { Stock } from './Stock';

import '../styles/itemDetail.css';
import { toCapitalLetter } from '../helpers/toCapitalLetter';

export const ItemDetail = ({item}) => {

  return (
    
    <section className="item-detail">
        <div className="item-detail-01">
          <img src={item.url2} />
          <img src={item.url3} />
        </div>
        <div className="item-detail-02">
          <img src={item.url1} />
        </div>
        <div className="item-text">
            <p className="item-text-nombre">{item.name}</p>
            <p className="item-text-categoria">Categoria: {toCapitalLetter(item.category)}</p>
            <ol>
                {item.det1 && <li>{item.det1}</li>}
                {item.det2 && <li>{item.det2}</li>}
                {item.det3 && <li>{item.det3}</li>}
                {item.det4 && <li>{item.det4}</li>}
            </ol>
            <p className="item-text-precio">Precio $ {priceFormat(item.price)}.-</p>
            <Stock item={item}/>
        </div>
    </section>
  )
}
