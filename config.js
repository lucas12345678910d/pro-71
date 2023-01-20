import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBrpVrL_kqz_oiDSFGH_yLnelT9KWUEs7I",
  authDomain: "pro-71-52f1d.firebaseapp.com",
  projectId: "pro-71-52f1d",
  storageBucket: "pro-71-52f1d.appspot.com",
  messagingSenderId: "275845028349",
  appId: "1:275845028349:web:c834122c00aef1ea6d2194"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
