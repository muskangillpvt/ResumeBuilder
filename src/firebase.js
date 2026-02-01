// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE_VEX36bO5uiTE25tXV0Nt5K-kO0tcPo",
  authDomain: "resumebuilder-248fd.firebaseapp.com",
  projectId: "resumebuilder-248fd",
  storageBucket: "resumebuilder-248fd.firebasestorage.app",
  messagingSenderId: "13706753145",
  appId: "1:13706753145:web:503d21a0ffe62b513a90a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
