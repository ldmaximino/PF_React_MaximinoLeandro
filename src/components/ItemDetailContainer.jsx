import { useParams } from 'react-router-dom';

import { UseDetailContainer } from '../hooks/UseDetailContainer';
import { ItemDetail } from './ItemDetail';
import { Loading } from './Loading';
import { Error404 } from './Error404';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  //const { error } = UseDetailContainer(id);
  const { item } = UseDetailContainer(id);

  //Utilizamos el patrón enum en lugar de un ternario recursivo
  const ViewState = {
    ERROR: 'error',
    ITEM_LOADED: 'item_loaded',
    LOADING: 'loading',
  };

  const componentToShow = (() => {
    switch (viewState) {
      case ViewState.ERROR:
        return <Error404 />;
      case ViewState.ITEM_LOADED:
        return <ItemDetail item={item} />;
      case ViewState.LOADING:
        return <Loading color="warning" />;
    }
  })();

  return (
    <>
      {componentToShow}
      {
        /*
        error
        ? <Error404 />
        : item
          ? <ItemDetail item={item} />
          : <Loading color="warning" />
        */
      }
    </>
  )
}
