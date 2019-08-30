import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD0BJun8I9KS1m4Vm7h7So3hmTZfae24y4',
  authDomain: 'crwn-db-be762.firebaseapp.com',
  databaseURL: 'https://crwn-db-be762.firebaseio.com',
  projectId: 'crwn-db-be762',
  storageBucket: 'crwn-db-be762.appspot.com',
  messagingSenderId: '729212154099',
  appId: '1:729212154099:web:18f9b7db886b08ff'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
