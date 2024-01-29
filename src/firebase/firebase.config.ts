import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCzqu0cEFZDtMm8_h245kWs8bm_FmxWBtg",
  authDomain: "sneakmax-30f91.firebaseapp.com",
  projectId: "sneakmax-30f91",
  storageBucket: "sneakmax-30f91.appspot.com",
  messagingSenderId: "942956734043",
  appId: "1:942956734043:web:dcf88083e432c49158017e",
  measurementId: "G-7X0X42HP5J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db}