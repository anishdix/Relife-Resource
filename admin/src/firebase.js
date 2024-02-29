// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN6EPeewbYE5GpQhzraXnyKk275JiDlx0",
  authDomain: "shop-81480.firebaseapp.com",
  projectId: "shop-81480",
  storageBucket: "shop-81480.appspot.com",
  messagingSenderId: "13167775677",
  appId: "1:13167775677:web:b4ed4e51164bb7c3500cd4",
  measurementId: "G-JWX5YZ12RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;