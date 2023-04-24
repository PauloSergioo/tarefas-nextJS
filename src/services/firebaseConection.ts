import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAL0PIot7Mb5x3FOWOHwnUUqjOwcoht7s8",
  authDomain: "projeto-tarefas-5d0b2.firebaseapp.com",
  projectId: "projeto-tarefas-5d0b2",
  storageBucket: "projeto-tarefas-5d0b2.appspot.com",
  messagingSenderId: "819462762646",
  appId: "1:819462762646:web:8bb63610cf0b207abc12b7"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };