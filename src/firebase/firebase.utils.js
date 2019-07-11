import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: '',
  authDomain: 'crwn-db-1777b.firebaseapp.com',
  databaseURL: 'https://crwn-db-1777b.firebaseio.com',
  projectId: 'crwn-db-1777b',
  storageBucket: '',
  messagingSenderId: '986787964371',
  appId: '',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
