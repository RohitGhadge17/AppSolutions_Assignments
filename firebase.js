import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDb-Pr4-YqmvCZHYEL23KGu3fWYULH2_Pw",
  authDomain: "fb-app2-242ff.firebaseapp.com",
  projectId: "fb-app2-242ff",
  storageBucket: "fb-app2-242ff.appspot.com",
  messagingSenderId: "208579928879",
  appId: "1:208579928879:web:bff151cc6a38dd9875b7da"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);