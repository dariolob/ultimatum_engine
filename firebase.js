// Import the required Firebase modules from Google's SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "$APIKEY", // Replace with your Firebase API key
    authDomain: "$authDomain", // Replace with your Firebase auth domain
    projectId: "$projectId", // Replace with your Firebase project ID
    storageBucket: "$storageBucket", // Replace with your Firebase storage bucket
    messagingSenderId: "$messagingSenderId", // Replace with your Firebase messaging sender ID
    appId: "$appId", // Replace with your Firebase app ID
    measurementId: "$measurementId" // Replace with your Firebase measurement ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', function() {
    // Check login state when page loads
    checkAuthState();
    
    document.getElementById('googleLoginBtn').addEventListener('click', function() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // Google Access Token
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('characterForm').style.display = 'block';
                
                // Store login state in localStorage for persistence (sticky session)
                localStorage.setItem('isLoggedIn', 'true');
                window.isLoggedIn = true;
            }).catch((error) => {
                // Handle Errors
                const errorCode = error.code;
                const errorMessage = error.message;
                // User email
                const email = error.customData?.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error('Error:', errorCode, errorMessage);
            });
    });
});

// Function to check auth state
function checkAuthState() {
    // Use the imported onAuthStateChanged function with the auth object
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            console.log("User is logged in:", user.email);
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("characterForm").style.display = "block";
            
            // Store login state in localStorage for persistence
            localStorage.setItem('isLoggedIn', 'true');
            window.isLoggedIn = true;
        } else {
            // User is signed out
            console.log("User is logged out");
            document.getElementById("loginForm").style.display = "block";
            document.getElementById("characterForm").style.display = "none";
            
            // Clear login state in localStorage
            localStorage.removeItem('isLoggedIn');
            window.isLoggedIn = false;
        }
    });
}