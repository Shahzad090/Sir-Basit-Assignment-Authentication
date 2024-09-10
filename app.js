
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
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
