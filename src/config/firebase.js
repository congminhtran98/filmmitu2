import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCtpiKl__LbgZ2GVL1F4PoRSlqpaEHPpBo',
  authDomain: 'netflix-clone-77faf.firebaseapp.com',
  projectId: 'netflix-clone-77faf',
  storageBucket: 'netflix-clone-77faf.appspot.com',
  messagingSenderId: '969313058050',
  appId: '1:969313058050:web:27934e7eeb95ada989d61b',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const Db = firebaseApp.firestore();

//Xác thực
const Auth = firebase.auth();

export { Auth, Db };
