import { useParams } from 'react-router-dom';

import { UseDetailContainer } from '../hooks/UseDetailContainer';
import { ItemDetail } from './ItemDetail';
import { Loading } from './Loading';
import { Error404 } from './Error404';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { item,error } = UseDetailContainer(id);

  return (
    <>
      {
        error
        ? <Error404 />
        : item
          ? <ItemDetail item={item} />
          : <Loading color="warning" />
      }
    </>
  )
}
