// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
//import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyC6I7IIq8vgyOYfcpiUaxXrWl0Q0_Q2zzo",
  authDomain: "medflux-86878.firebaseapp.com",
  databaseURL: "https://medflux-86878-default-rtdb.firebaseio.com",
  projectId: "medflux-86878",
  storageBucket: "medflux-86878.firebasestorage.app",
  messagingSenderId: "608034255001",
  appId: "1:608034255001:web:e4e21b268208f5ce8d0808",
  measurementId: "G-BG2RVTKXDC"
};*/
/*const firebaseConfig = {
  apiKey: "AIzaSyCNTekUek53g8dWgMQ1OCkB4H3PnTvGVx0",
  authDomain: "med-flux-1.firebaseapp.com",
  projectId: "med-flux-1",
  storageBucket: "med-flux-1.firebasestorage.app",
  messagingSenderId: "814766949787",
  appId: "1:814766949787:web:d54a4a6e5af7219ba70d3e",
  measurementId: "G-YBQZS46JE6"
};*/
const firebaseConfig = {
  apiKey: "AIzaSyBsexA81hAeEsfHt5nH2U9_ix0f2wCpxw0",
  authDomain: "medflux-db14a.firebaseapp.com",
  projectId: "medflux-db14a",
  storageBucket: "medflux-db14a.firebasestorage.app",
  messagingSenderId: "340683852542",
  appId: "1:340683852542:web:7d4de9d18eab4a8a4533af",
  measurementId: "G-CX27K3BV02"
};

/*nst firebaseConfig = {
  apiKey: "AIzaSyC2hu9tEPbqQHoIwa-HUwL1cj-i3oLu7QI",
  authDomain: "medflux-1.firebaseapp.com",
  projectId: "medflux-1",
  storageBucket: "medflux-1.firebasestorage.app",
  messagingSenderId: "127756229898",
  appId: "1:127756229898:web:54942db69f2030b4c5aef3",
  measurementId: "G-44V5WT5TVX"
};*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const auth = getAuth(app);
const db = getFirestore(app);
 export {db};