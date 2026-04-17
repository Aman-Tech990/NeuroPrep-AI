import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "neuroprep-ai.firebaseapp.com",
    projectId: "neuroprep-ai",
    storageBucket: "neuroprep-ai.firebasestorage.app",
    messagingSenderId: "449806360036",
    appId: "1:449806360036:web:920ca62aa01fb22b20fbf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };