// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth/cordova";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyA9p6taFh3NHxxTsaG3Qdeoi2iluV4pVpg",
//   authDomain: "invoice-app-4bd54.firebaseapp.com",
//   projectId: "invoice-app-4bd54",
//   storageBucket: "invoice-app-4bd54.appspot.com",
//   messagingSenderId: "581422230567",
//   appId: "1:581422230567:web:577cac03099b5477067202",
//   measurementId: "G-9S5G86ST6X",
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlux0CHO4Aa_O5EWRCIZnX_gNaxLmWMaA",
  authDomain: "invoice-ac253.firebaseapp.com",
  projectId: "invoice-ac253",
  storageBucket: "invoice-ac253.appspot.com",
  messagingSenderId: "33437778624",
  appId: "1:33437778624:web:f77c31eee69ce7b5b2e325",
  measurementId: "G-M8KZFB4NM3"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
export const storage = getStorage();
 export const db = getFirestore(app);