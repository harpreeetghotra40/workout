import Cookies from 'js-cookie'
import { db } from '../firebase'

const helpers = {
  TOKEN: Cookies.get('userToken'),
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
