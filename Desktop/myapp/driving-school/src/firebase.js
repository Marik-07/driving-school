import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCjF-EDmUY89q4tudpDFqG_TakmkcgZ2ow",
  authDomain: "driving-school-1c9f6.firebaseapp.com",
  projectId: "driving-school-1c9f6",
  storageBucket: "driving-school-1c9f6.firebasestorage.app",
  messagingSenderId: "521733819709",
  appId: "1:521733819709:web:d17140a22f6deb9ef04954",
  measurementId: "G-DQM7ZSG108"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)