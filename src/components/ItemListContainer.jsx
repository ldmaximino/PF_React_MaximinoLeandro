import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { bdProductos } from '../data/bdProductos';
import { ItemList } from './ItemList';
import { toLower } from '../helpers/toLower';
import { Loading } from './Loading';

import '../styles/itemListContainer.css';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const {id} = useParams();

  useEffect(() => {
      const myPromise = new Promise((resolve,reject) => {
        setLoading(true);
        setTimeout(() => {
          resolve(bdProductos);
        }, 2000);
      });
      myPromise
        .then((response) => {
          if(id){
            const myRespFilter = response.filter(it => toLower(it.categoria) === id);
            setItems(myRespFilter);
            setLoading(false);
          } else {
            setItems(response);
            setLoading(false);
          }
        })
  },[id]);

  return (
    <>
      {loading 
        ? (<Loading color="warning" />)
        : (<section className="itemList-section">
             {items ? <ItemList items={items} categoria={id} /> : <Loading />}
           </section>)}
    </>
  )
}
