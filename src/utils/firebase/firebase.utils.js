import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI6Y77u86lOOzKkeKUvbcFFcy97Hm_d0I",
  authDomain: "enigma-clothing-db.firebaseapp.com",
  projectId: "enigma-clothing-db",
  storageBucket: "enigma-clothing-db.appspot.com",
  messagingSenderId: "447143045838",
  appId: "1:447143045838:web:96fa2743d3f0c98781fe9f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("get document:", userSnapshot);
  console.log("get document:", userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("can not create data!");
    }
  }

  return userDocRef;
};
