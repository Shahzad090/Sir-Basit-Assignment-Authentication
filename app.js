
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
   } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  
  const firebaseConfig = {
    apiKey: "AIzaSyCkOQfrkgXNnDfxkPWEhRrg-FiJpMavzZ8",
    authDomain: "new-project--sir-basit.firebaseapp.com",
    projectId: "new-project--sir-basit",
    storageBucket: "new-project--sir-basit.appspot.com",
    messagingSenderId: "976795702033",
    appId: "1:976795702033:web:29a928b4b3d2718b53f2b0",
    measurementId: "G-BYEZH62P2M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  
const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const Signup_btn = document.getElementById("Signup_btn");

Signup_btn.addEventListener("click" .createUserAccount);
