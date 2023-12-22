import { useParams } from 'react-router-dom';

import { UseItemListContainer } from '../hooks/UseItemListContainer';
import { ItemList } from './ItemList';
import { Loading } from './Loading';
import { Error404 } from './Error404';

import '../styles/itemListContainer.css';

export const ItemListContainer = () => {
  const {idCat} = useParams();
  const { items, loading, error } = UseItemListContainer(idCat);
  
  return (
    <>
      {
        error
          ? <Error404 />
          : loading 
              ? (<Loading color="warning" />)
              : (<section className="itemList-section">
                  {items ? <ItemList items={items} category={idCat} /> : <Loading color="warning" />}
                </section>)
      }
    </>
  )
}
