// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFireStore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDL8siXCj0STAj4FzxDVdk4UoQRFp30nA",
  authDomain: "getmovies-9eded.firebaseapp.com",
  projectId: "getmovies-9eded",
  storageBucket: "getmovies-9eded.appspot.com",
  messagingSenderId: "244831132081",
  appId: "1:244831132081:web:97b226282ce0cff6780590"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
//  Initialize FireStore
 export const db=getFireStore(app)
//  Also you can create the ref to your collection here :-
 export const Movieref=collection(db,"movie")