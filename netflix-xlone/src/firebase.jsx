import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBrIzwL-mlo_wJXm22I5kg4psQBKoW4UUw",
    authDomain: "netflix-clone-kerem.firebaseapp.com",
    projectId: "netflix-clone-kerem",
    storageBucket: "netflix-clone-kerem.appspot.com",
    messagingSenderId: "240844825617",
    appId: "1:240844825617:web:fe35843c2b6cc65eb8fdb0"
  };

  const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword};
export default db;
