import { initializeApp }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getDatabase }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAuth, onAuthStateChanged }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


var fb_gamedb
const AUTH = getAuth();

onAuthStateChanged(AUTH, (user) => {

    if (user) {
        // Display: User Logged In
    } else {
        // Display: User Logged Out
    }

}, (error) => {

    // Display: Authentication Error

});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPL24VWJhZmddNslgw2XRv7NIVu4tkfsk",
    authDomain: "vanessa-sturman-13comp-8f6f4.firebaseapp.com",
    databaseURL: "https://vanessa-sturman-13comp-8f6f4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "vanessa-sturman-13comp-8f6f4",
    storageBucket: "vanessa-sturman-13comp-8f6f4.firebasestorage.app",
    messagingSenderId: "294457924144",
    appId: "1:294457924144:web:4d51a9d46ea5415b572bf5"
  };

// Initialize Firebase
const FB_GAMEAPP = initializeApp(firebaseConfig);

fb_gamedb= getDatabase(FB_GAMEAPP);

console.info(fb_gamedb);

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function fb_authenticate() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User signed in:", result.user);
        })
        .catch((error) => {
            console.error("Authentication error:", error);
        });
}

//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
            'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { 
    fb_initialise };

function fb_initialise() {
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    document.getElementById("p_fbInitialise").innerHTML= "Button Clicked";
}

/**************************************************************/
// END OF CODE
/**************************************************************/
