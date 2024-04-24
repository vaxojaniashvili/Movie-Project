import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBxdZALB373aVn9SYaXpDvroJNui5A6heI",
  authDomain: "first-app-9a2f5.firebaseapp.com",
  projectId: "first-app-9a2f5",
  storageBucket: "first-app-9a2f5.appspot.com",
  messagingSenderId: "517573665442",
  appId: "1:517573665442:web:710023089fbd4ccb266dfb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)