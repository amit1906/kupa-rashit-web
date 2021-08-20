import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCct-fApPzL_RHYGQy_ItSsjuK6Uk4oJ7E",
  authDomain: "flash-district-322810.firebaseapp.com",
  projectId: "flash-district-322810",
  storageBucket: "flash-district-322810.appspot.com",
  messagingSenderId: "352277317018",
  appId: "1:352277317018:web:4525a12807ad7594392623",
  measurementId: "G-9LGVDJFYNH",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
