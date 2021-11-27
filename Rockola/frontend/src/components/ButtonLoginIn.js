import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyDVk4sHJbBTVGzVqi_AH6yXEZCi4BDLZPs",
    authDomain: "larockola-5cc46.firebaseapp.com",
    projectId: "larockola-5cc46",
    storageBucket: "larockola-5cc46.appspot.com",
    messagingSenderId: "518939227939",
    appId: "1:518939227939:web:23a14808f3344e1f44fe96"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.

    signInSuccessWithAuthResult: (authResult) => {
      const obj = {
        "id": authResult.user.uid,
        "email": authResult.user.email,
        "picture": authResult.user.photoURL
      }
      localStorage.setItem('data', JSON.stringify(obj));
      

      return true;
    },
  },
};

function ButtonLoginIn() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
}

export default ButtonLoginIn
