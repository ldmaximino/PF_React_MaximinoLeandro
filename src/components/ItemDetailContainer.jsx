import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetail } from './ItemDetail';
import { Loading } from './Loading';
import { bdProductos } from '../data/bdProductos';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    
      const myPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(bdProductos);
        }, 2000);
      })
      myPromise.then((response) => {
          const findById = response.find(it => it.codigo === id);
          setItem(findById);
      });

  },[id]);

  return (
    <>
       {item ? <ItemDetail item={item}/> : <Loading />}
    </>
  )
}
