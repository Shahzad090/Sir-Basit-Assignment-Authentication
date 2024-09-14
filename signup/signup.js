import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAYiyZhDX_l9CthgqC-yg0pPtoN7fJAyo",
  authDomain: "form-e5426.firebaseapp.com",
  projectId: "form-e5426",
  storageBucket: "form-e5426.appspot.com",
  messagingSenderId: "759286666550",
  appId: "1:759286666550:web:e01c5ab9f618e16d34cf97",
  measurementId: "G-8N8GGDKZFN"
};

  // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);



onAuthStateChanged(auth, (user) => {
 if (user) {
   const uid = user.uid;
   
 } else {
   
 }
});


  const signup_email = document.getElementById("signUp_email");
  const signup_password = document.getElementById("signUp_password");
  const signup_btn = document.getElementById("signup_btn");
  signup_btn.addEventListener("click", createUserAccount);



function createUserAccount() {
    console.log("email=>", signup_email.value);
    console.log("password=>", signup_password.value);
    createUserWithEmailAndPassword(auth,signup_email.value,signup_password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user=>", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
