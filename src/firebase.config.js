import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC5Yz1lX306M7yPyVOscGhfa_a3DL_sVXI",
  authDomain: "maltimart-3b052.firebaseapp.com",
  projectId: "maltimart-3b052",
  storageBucket: "maltimart-3b052.appspot.com",
  messagingSenderId: "777494043287",
  appId: "1:777494043287:web:989be6e6e5645b15ab27d2",
  measurementId: "G-Z4C7WGVYB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
