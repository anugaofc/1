// Developer: Anuga Senithu
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, googleProvider, appleProvider, microsoftProvider, showToast } from './app.js';

const isLoginPage = document.getElementById('loginForm') !== null;
const isSignupPage = document.getElementById('signupForm') !== null;

if (isLoginPage) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, document.getElementById('loginEmail').value, document.getElementById('loginPassword').value);
            showToast('Login successful! Redirecting...');
            setTimeout(() => window.location.href = 'dashboard.html', 1500);
        } catch (error) { showToast(error.message, true); }
    });

    document.getElementById('googleLogin').addEventListener('click', async () => {
        try { await signInWithPopup(auth, googleProvider); window.location.href = 'dashboard.html'; } 
        catch (error) { showToast(error.message, true); }
    });
    document.getElementById('appleLogin').addEventListener('click', async () => {
        try { await signInWithPopup(auth, appleProvider); window.location.href = 'dashboard.html'; } 
        catch (error) { showToast(error.message, true); }
    });
    document.getElementById('microsoftLogin').addEventListener('click', async () => {
        try { await signInWithPopup(auth, microsoftProvider); window.location.href = 'dashboard.html'; } 
        catch (error) { showToast(error.message, true); }
    });
}

if (isSignupPage) {
    document.getElementById('signupForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, document.getElementById('signupEmail').value, document.getElementById('signupPassword').value);
            showToast('Account created successfully! Redirecting...');
            setTimeout(() => window.location.href = 'dashboard.html', 1500);
        } catch (error) { showToast(error.message, true); }
    });

    document.getElementById('googleSignup').addEventListener('click', async () => {
        try { await signInWithPopup(auth, googleProvider); window.location.href = 'dashboard.html'; } 
        catch (error) { showToast(error.message, true); }
    });
    document.getElementById('appleSignup').addEventListener('click', async () => {
        try { await signInWithPopup(auth, appleProvider); window.location.href = 'dashboard.html'; } 
        catch (error) { showToast(error.message, true); }
    });
    document.getElementById('microsoftSignup').addEventListener('click', async () => {
        try { await signInWithPopup(auth, microsoftProvider); window.location.href = 'dashboard.html'; } 
        catch (error) { showToast(error.message, true); }
    });
}
