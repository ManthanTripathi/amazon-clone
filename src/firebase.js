import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCPKjqdViFa0c_KQ1pXKRGMz6dnqHmoMdw",
    authDomain: "amz-clone-c3935.firebaseapp.com",
    projectId: "amz-clone-c3935",
    storageBucket: "amz-clone-c3935.appspot.com",
    messagingSenderId: "944548848604",
    appId: "1:944548848604:web:c692ff39423630200e2519",
    measurementId: "G-N0XLHJRRFM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };