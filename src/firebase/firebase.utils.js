import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBBb1lWRDSP9OFtrOUkUgv7yybImneDMpk",
    authDomain: "crwn-db-bf0e3.firebaseapp.com",
    databaseURL: "https://crwn-db-bf0e3.firebaseio.com",
    projectId: "crwn-db-bf0e3",
    storageBucket: "crwn-db-bf0e3.appspot.com",
    messagingSenderId: "1076679051312",
    appId: "1:1076679051312:web:a165a4f9db5997baaf05f5",
    measurementId: "G-M0FH03G68G"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;