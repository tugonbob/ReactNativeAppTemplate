import { initializeApp } from "firebase/app";

// for auth state persistence
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Optionally import the services that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAvDo7X6Ma47h1UV0NmIBVanwn8sQG4Eqc",
  authDomain: "reactnativeapptemplate-ae3db.firebaseapp.com",
  projectId: "reactnativeapptemplate-ae3db",
  storageBucket: "reactnativeapptemplate-ae3db.appspot.com",
  messagingSenderId: "822580819680",
  appId: "1:822580819680:web:87c4b2fea1248852a64285",
};

const app = initializeApp(firebaseConfig);

// auth state persistence
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const auth = getAuth();
const db = getFirestore(app);
// const storage = getStorage();
// const functions = getFunctions();
const googleAuth = new GoogleAuthProvider();

export { auth, db, googleAuth };
