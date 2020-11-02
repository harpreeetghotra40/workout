import React, { useState, useEffect } from 'react'
import './Log.styles.scss'
import { db, auth } from '../../firebase'

const Log = () => {
  const [log, setLog] = useState({})
  const [dates, setDates] = useState([])
  const getWeightLog = () => {
    db.collection('weightLog')
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setLog(doc.data())
          setDates(Object.keys(doc.data()))
        }
      })
  }
  useEffect(() => {
    getWeightLog()
  }, [])
  return (
    <div className="log-wrapper">
      <div>Weight Log</div>
      <div className="log-container">
        <div className="log flex-container">
          <div>Date</div>
          <div>Weight</div>
        </div>
      </div>
    </div>
  )
}

export default Log
