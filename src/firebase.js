// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1XkpqRWmnC02VxNCRcH484yT2JiMCQFg',
  authDomain: 'workout-4fa58.firebaseapp.com',
  databaseURL: 'https://workout-4fa58.firebaseio.com',
  projectId: 'workout-4fa58',
  storageBucket: 'workout-4fa58.appspot.com',
  messagingSenderId: '398059278726',
  appId: '1:398059278726:web:b01884882da4511ba31c07',
  measurementId: 'G-BB58MF688W',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
export const db = firebase.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithRedirect(provider)
export const signOut = () => auth.signOut()
export default firebase
