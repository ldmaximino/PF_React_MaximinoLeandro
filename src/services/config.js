import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbFXnb4SGueEhmTqjlT0B_JtXdXfihJMU",
  authDomain: "ecommerce-607f5.firebaseapp.com",
  projectId: "ecommerce-607f5",
  storageBucket: "ecommerce-607f5.appspot.com",
  messagingSenderId: "528149048972",
  appId: "1:528149048972:web:24115506db017e443fd5a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);