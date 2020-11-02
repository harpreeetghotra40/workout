import { db, auth } from '../firebase'

const helpers = {
  createUser: (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection('users')
          .doc(cred.user.uid)
          .set({
            weight: 0,
            age: 24,
            height: { feet: 5, inches: 8 },
          })
      })
      .catch((error) => {
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
    db.collection('users').doc(auth.currentUser.uid).set({
      age,
      height,
      weight,
    })
  },
  updateWeight: (newWeight) => {
    db.collection('users').doc(auth.currentUser.uid).update({
      weight: newWeight,
    })
  },
  addNewWeightToLog: (newWeight, date) => {
    db.collection('weightLog')
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log('user info found')
          db.collection('weightLog')
            .doc(auth.currentUser.uid)
            .update({ [date]: { weight: newWeight } })
            .catch((e) => console.log(e.message))
        } else {
          console.log('user info not found')
          db.collection('weightLog')
            .doc(auth.currentUser.uid)
            .set({ [date]: { weight: newWeight } })
            .catch((e) => console.log(e.message))
        }
      })
  },
}

export default helpers
