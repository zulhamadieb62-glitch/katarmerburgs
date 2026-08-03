// Import Modul Firebase (SDK v9/v10 via CDN Modul)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Konfigurasi Firebase dari Dashboard Kamu:
const firebaseConfig = {
  apiKey: "AIzaSyDg336xHRWos3kjjW5QTrg_9LUp82UMI7Q",
  authDomain: "katar-rw08-app.firebaseapp.com",
  projectId: "katar-rw08-app",
  storageBucket: "katar-rw08-app.firebasestorage.app",
  messagingSenderId: "338794868113",
  appId: "1:338794868113:web:856651578647690de97e30"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);