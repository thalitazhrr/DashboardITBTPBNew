import { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';
import firebaseApp from '../services/firebase-sdk';

const useGetValue = (username) => {
  const [userData, setUserData] = useState(null);

  const getValue = async () => {
    try {
      const db = getDatabase(firebaseApp);
      const userRef = ref(db, 'users/' + username);
      const snapshot = await get(child(userRef, ''));
      const dbValue = snapshot.val();
      setUserData(dbValue ? dbValue : null);
    } catch (error) {
      console.error('Error getting data:', error);
      setUserData(null);
    }
  };

  useEffect(() => {
    if (username) {
      getValue();
    }
  }, [username]);

  return {
    userData
  };
};

export default useGetValue;