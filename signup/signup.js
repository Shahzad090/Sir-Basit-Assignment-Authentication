
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAnalytics,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
   } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you -want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  
  const firebaseConfig = {
    apiKey: "AIzaSyDtDQ21PoPj9pYs1t6lBFLUHAuzcJsWPQM",
    authDomain: "sir-assignment-project.firebaseapp.com",
    projectId: "sir-assignment-project",
    storageBucket: "sir-assignment-project.appspot.com",
    messagingSenderId: "776793860879",
    appId: "1:776793860879:web:280b2f797ba1c21e372c7a",
    measurementId: "G-H8NPMNEL2F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const first_Name = document.getElementById("first_Name");
  const last_Name = document.getElementById("last_Name");
  const Email = document.getElementById("Email");
  const Password = document.getElementById("Password");
  const Signup_btn= document.getElementById("Signup_btn");
  
  Signup_btn.addEventListener("click" .createUserAccount);
  