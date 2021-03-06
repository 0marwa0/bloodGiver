//import firebase from 'firebase/app';
import * as firebase from 'firebase/app';
// import 'firebase/auth';
import {
  getAuth,
  GoogleAuthProvider,
  // signInWithRedirect,
  // signInWithPopup,
} from 'firebase/auth';
import 'firebase/firestore';
const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebase.apps) {
  firebase.initializeApp(clientCredentials);
}
const auth = getAuth(firebase);
const provider = GoogleAuthProvider.PROVIDER_ID;

export { firebase, provider, auth };
