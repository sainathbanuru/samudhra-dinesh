import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUZW1I6HR838E9zbnkMr7J9k0ZVxW9deg",
  authDomain: "samudhra-fl.firebaseapp.com",
  databaseURL: "https://samudhra-fl.firebaseio.com",
  projectId: "samudhra-fl",
  storageBucket: "samudhra-fl.appspot.com",
  messagingSenderId: "750511764308",
  appId: "1:750511764308:web:4dcd9f2f3eebe5f6"
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
