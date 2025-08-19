
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVeghdHH1CldNjaeI9vkiUjPFbnRX_A64",
  authDomain: "book-hive-7882f.firebaseapp.com",
  projectId: "book-hive-7882f",
  storageBucket: "book-hive-7882f.firebasestorage.app",
  messagingSenderId: "674185744683",
  appId: "1:674185744683:web:309575f25d5da9340a356e",
  measurementId: "G-JC7W1Z0CYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db= getFirestore(app);

const signup= async(name,email, password)=>{
  try{
     const res = await createUserWithEmailAndPassword(auth, name,email, password);
     const user = res.user;
     //to store user in firebase database
     await addDoc(collection(db, "user"),{
       uid: user.uid,
       name,
       authProvider: "local",
       email,
     })
  }
  catch(err){
    console.log(err);
    toast.error(err.message);
  }
}

const login= async(email, password)=>{
  try{
      await signInWithEmailAndPassword(auth, email, password);
  }
  catch(err){
    toast.error(err.message);
  }
}

const logout= ()=>{
    signOut(auth);
}

export {auth, db, signup, login, logout};