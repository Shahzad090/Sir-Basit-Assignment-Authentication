// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import {
  getAnalytics,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCkOQfrkgXNnDfxkPWEhRrg-FiJpMavzZ8",
  authDomain: "new-project--sir-basit.firebaseapp.com",
  projectId: "new-project--sir-basit",
  storageBucket: "new-project--sir-basit.appspot.com",
  messagingSenderId: "976795702033",
  appId: "1:976795702033:web:29a928b4b3d2718b53f2b0",
  measurementId: "G-BYEZH62P2M",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const Signin_btn = document.getElementById("Signin_btn");

Signin_btn.addEventListener("click".createUserAccount);
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is login===>");

    const uid = user.uid;
    // ...
  } else {
    console.log("user is not login===>");
  }
});

function creatUserAccount() {
  
  
  createUserWithEmailAndPassword(
    auth,
     email.value, 
     password.value,
    )
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log("user=>, user")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
