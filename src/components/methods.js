import Cookies from 'js-cookie'
import { db, auth } from '../firebase'

const helpers = {
  TOKEN: Cookies.get('userToken'),
  createUser: (email, password) => {
    auth.createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.table({ errorCode, errorMessage })
    })
  },
  signIn: (email, password) => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      console.table({ errorCode, errorMessage })
    })
  },
  updateMeasurements: (age, height, weight) => {
    db.collection('measurements').doc(helpers.TOKEN).set({
      age,
      height,
      weight,
    })
  },
  updateWeight: (newWeight) => {
    db.collection('measurements').doc(helpers.TOKEN).update({
      weight: newWeight,
    })
  },
  addRun: (distance, pace, time) => {
    db.collection('runningLog').doc().set({
      uid: helpers.TOKEN,
      distance,
      pace,
      time,
    })
  },
}

export default helpers
