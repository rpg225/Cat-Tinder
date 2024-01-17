import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCe_PunmCbSDn_dZ1SNdFsMpewyhBZWi00",
  authDomain: "cat-tinder-6141b.firebaseapp.com",
  projectId: "cat-tinder-6141b",
  storageBucket: "cat-tinder-6141b.appspot.com",
  messagingSenderId: "8728797677",
  appId: "1:8728797677:web:0efed3336fbebbf9aac7e4"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;