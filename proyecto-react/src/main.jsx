import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClLM3aNzo9OB5qo6pGLh8Yz7PhDnSk1bQ",
  authDomain: "proyecto-react-3afc6.firebaseapp.com",
  projectId: "proyecto-react-3afc6",
  storageBucket: "proyecto-react-3afc6.appspot.com",
  messagingSenderId: "240841793343",
  appId: "1:240841793343:web:a20fb645bb82d9dd7abd8a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render( <App />)