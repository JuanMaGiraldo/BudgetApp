import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFLYEp71J5WAymI5X3gvLFO1UAnBGkg0k",
  authDomain: "budgetapp-174d5.firebaseapp.com",
  databaseURL: "https://budgetapp-174d5-default-rtdb.firebaseio.com",
  projectId: "budgetapp-174d5",
  storageBucket: "budgetapp-174d5.appspot.com",
  messagingSenderId: "564632473599",
  appId: "1:564632473599:web:b1ce4ffb1464e958d9a1ca",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
