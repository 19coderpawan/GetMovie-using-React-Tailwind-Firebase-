// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
//  Initialize FireStore
 export const db=getFirestore(app)
//  Also you can create the ref to your collection here :-
 export const Movieref=collection(db,"movie")
//  ref of the Moviereview
export const Reviewref=collection(db,"Moviereview")
// ref of the Users
export const Usersref=collection(db,"Users")
// Initialize Authentication
export const Auth=getAuth(app);
