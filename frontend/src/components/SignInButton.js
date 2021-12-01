// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyAMWDXJxsqKnOBli_FYoKRWbhWY4VhY_9k",
    authDomain: "ganadorg.firebaseapp.com",
    projectId: "ganadorg",
    storageBucket: "ganadorg.appspot.com",
    messagingSenderId: "995101931184",
    appId: "1:995101931184:web:06d1eef56e371b14a2ad75",
    /* measurementId: "G-QZ1N7F1ELD" */
  };
firebase.initializeApp(config);

localStorage.setItem("example",5);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
 signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: { 
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {

          const user =  { 
              uid : authResult.user.uid,
              name: authResult.user.displayName,
              photoUrl : authResult.user.photoURL,
              email: authResult.user.email,
              flagNewUser: authResult.additionalUserInfo.isNewUser,
          };

          localStorage.setItem('user', JSON.stringify(user));
          return true;
      }
  }
};

function SignInButton() {
  return (
    <div>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignInButton;

