import firebase from 'firebase';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBLM3Yp3hB1S4GyiBRSiKXenyRUNq8p1zI",
    authDomain: "airbclone.firebaseapp.com",
    projectId: "airbclone",
    storageBucket: "airbclone.appspot.com",
    messagingSenderId: "364710948640",
    appId: "1:364710948640:web:b3f4d8cd917ee5e439f145",
    measurementId: "G-1LYL603MK4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
