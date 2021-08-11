import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyAOHQFYHyg_37hSe97Yg3_FZRzzH43M3uo",
    authDomain: "booksanta-73630.firebaseapp.com",
    projectId: "booksanta-73630",
    storageBucket: "booksanta-73630.appspot.com",
    messagingSenderId: "244440309454",
    appId: "1:244440309454:web:b3c035973fc54f4b43fa9f"
  };
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()