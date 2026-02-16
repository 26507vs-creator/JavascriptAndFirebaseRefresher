import { initializeApp }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";

import { getDatabase, ref, set, get }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

    var fb_gamedb

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
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { 
    fb_initialise };

function fb_initialise() {
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    document.getElementById("p_fbInitialise").innerHTML= "Button Clicked";

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

    fb_gamedb = getDatabase(FB_GAMEAPP);

    console.info(fb_gamedb); 
}


export function fbReadRec(){
    const dbReference= ref(fb_gamedb, "/Users/Name");

    get(dbReference).then((snapshot) => {

        var fb_data = snapshot.val();

        if (fb_data != null) {
            // Code for a successful read goes here
            console.log("Sucessful read")
            document.getElementById("p_fbReadRec").innerHTML= "Sucessful read";

        } else {
            // Code for no record found goes here
            console.log("No record found")
            document.getElementById("p_fbReadRec").innerHTML= "No record found";
        }

    }).catch((error) => {
        // Code for a read error goes here
        console.log(error)

    });
}


function btn_writeRec(){
    console.log("write record button clicked");
    console.log(fb_gamedb)
        const dbReference= ref(fb_gamedb, "/Users/Name");

    set(dbReference, "Ben").then(() => {

        console.log("Record written successfully");
        document.getElementById("p_fbWriteRec").innerHTML= "Sucess!";


    }).catch((error) => {

        console.error("Error writing record: ", error);

    });
}
 window.btn_writeRec   = btn_writeRec;

// Create and export fb_authenticate()
export function fb_authenticate() {

    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();

    // Force Google to show account selection
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    signInWithPopup(AUTH, PROVIDER).then((result) => {
            // Successful authentication
            console.log(result.user.email);
            console.log(result.user.uid);
            document.getElementById("p_fbAuthenticate").innerHTML= "Sucess!";

        })
        .catch((error) => {
            //  Authentication error
            console.log(error);
            document.getElementById("p_fbAuthenticate").innerHTML= "Error";

        });
}

export function fb_detectLoginChange() {
    const AUTH = getAuth();

    onAuthStateChanged(AUTH, (user) => {

        if (user) {
            // Code for user logged in goes here
            console.log("User logged in")
            document.getElementById("p_fbLogin").innerHTML= "User logged in";

        } else {
            // Code for user logged out goes here
            console.log("User logged out")
            document.getElementById("p_fbLogin").innerHTML= "User logged out";

        }
    }, (error) => {
        // Code for an onAuthStateChanged error goes here
        console.log(error)

    });}


export function fb_logout() {
    const AUTH = getAuth();

    signOut(AUTH).then(() => {
        // Code for a successful logout goes here
        console.log("Sucessful logout")
    })
    .catch((error) => {
        // Code for a logout error goes here
        console.log(error)
    });}

/**************************************************************/
// END OF CODE
/**************************************************************/