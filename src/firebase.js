// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

// Your web app's Firebase configuration
export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBMBO6mQ-ZlBIbjI4QsoM0QF9sPVedBlPY',
  authDomain: 'soundplayer-a41d8.firebaseapp.com',
  projectId: 'soundplayer-a41d8',
  storageBucket: 'soundplayer-a41d8.appspot.com',
  messagingSenderId: '325345924862',
  appId: '1:325345924862:web:e1a1ee65e5c60018a1b7af'
})

export const db = getFirestore(firebaseApp)

export const numbersRef = collection(db, 'numbers')
