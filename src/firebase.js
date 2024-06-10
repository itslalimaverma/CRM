
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCSmTdD4JY5QuYV1X0HfJho4TZyfp_ADZQ",
    authDomain: "xenocrm-f9e82.firebaseapp.com",
    projectId: "xenocrm-f9e82",
    storageBucket: "xenocrm-f9e82.appspot.com",
    messagingSenderId: "286363051405",
    appId: "1:286363051405:web:ad59587b1b12f2206409c4",
    // measurementId: "G-JTJEB62ZDC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
