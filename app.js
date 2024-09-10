// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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