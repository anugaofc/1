// Developer: Anuga Senithu
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, OAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWnIQ3KTx9S9GXmdpNQ_T_A4k-lOt9ELU",
  authDomain: "anuga-senithu-c35d6.firebaseapp.com",
  projectId: "anuga-senithu-c35d6",
  storageBucket: "anuga-senithu-c35d6.firebasestorage.app",
  messagingSenderId: "341272383565",
  appId: "1:341272383565:web:47b2f1cd95887987030c04"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com');
const microsoftProvider = new OAuthProvider('microsoft.com');

function showToast(message, isError = false) {
    const toast = document.getElementById('notificationToast');
    const toastMessage = document.getElementById('toastMessage');
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.style.borderLeftColor = isError ? '#ff0055' : 'var(--neon-green)';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, googleProvider, appleProvider, microsoftProvider, signOut, onAuthStateChanged, showToast };
