import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const UseDetailContainer = (id) => {
  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Products", id);
        const resp = await getDoc(docRef);

        if (resp.exists()) {
          setItem({ ...resp.data(), id: resp.id });
          setError(false);
        } else {
          setError(true); 
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  },[id]);

  return { item, error };  
}
