import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const UseItemListContainer = (idCat) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosRef = collection(db, "Products");
        const Quer = idCat
          ? query(productosRef, where("category", "==", idCat))
          : productosRef;

        const resp = await getDocs(Quer);
        
        if(resp.docs.length > 0) {
          setItems(
            resp.docs.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
          setError(false);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
          setLoading(false);
      }
    };

    fetchData();
  },[idCat]);

  return { items, loading, error };
}
