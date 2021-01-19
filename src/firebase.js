import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyApC26PbDvkoqazFFyw4f7v9G3noaINla8",
    authDomain: "linked-in-clone-26db5.firebaseapp.com",
    projectId: "linked-in-clone-26db5",
    storageBucket: "linked-in-clone-26db5.appspot.com",
    messagingSenderId: "685815396199",
    appId: "1:685815396199:web:91e728a1f4b32ec73021c2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore(); 

  const auth = firebase.auth(); 

  export { db, auth };