import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// lấy ở comment

const firebaseConfig = {
  apiKey: 'AIzaSyCtpiKl__LbgZ2GVL1F4PoRSlqpaEHPpBo',
  authDomain: 'netflix-clone-77faf.firebaseapp.com',
  projectId: 'netflix-clone-77faf',
  storageBucket: 'netflix-clone-77faf.appspot.com',
  messagingSenderId: '969313058050',
  appId: '1:969313058050:web:27934e7eeb95ada989d61b'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//Xác thực
const Auth = firebase.auth();

export { Auth, db };
