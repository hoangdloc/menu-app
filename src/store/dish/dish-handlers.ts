import { collection, onSnapshot } from 'firebase/firestore';

import { db } from '../../config/firebase';

export function handleFetchDishes (): void {
  try {
    const colRef = collection(db, 'dishes');
    onSnapshot(colRef, (snapshot) => {});
  } catch (err) {
    console.error(err);
  }
}
