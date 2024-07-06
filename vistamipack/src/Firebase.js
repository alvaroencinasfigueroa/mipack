// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { TwitterAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOh5dhT-gsw7ExOERhddY3uHzm8CSiJzw",
  authDomain: "packstore-b63fb.firebaseapp.com",
  projectId: "packstore-b63fb",
  storageBucket: "packstore-b63fb.appspot.com",
  messagingSenderId: "818187246939",
  appId: "1:818187246939:web:ca846cc93cc7ac94044e7e",
  measurementId: "G-L019X8K1FX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const logout = async () => {
  try {
    await signOut(auth);
    console.log("CIERRE DE SESIÓN EXITOSO...")
  } catch (error) {
    console.error("ERROR AL CERRAR SESIÓN...");
  }
};

const crearUserWithTwitter = async () => {
  try{
    const provider = new TwitterAuthProvider();
    const auth = getAuth(app);
    const result = await auth.signInWithPopup(provider);
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const user = result.user;
  }catch(error){
    console.error("Error al crear cuenta...");
  }
}

export { logout };
export {crearUserWithTwitter};
