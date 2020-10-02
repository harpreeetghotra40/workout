import React, { useState, useEffect } from 'react'
import helpers from '../methods'
import { db } from '../../firebase'

const RunningStat = () => {
  const [distance, setDistance] = useState(0)
  const [pace, setPace] = useState(0)
  const [time, setTime] = useState(0)

  const setRun = (newRun) => {
    setDistance(newRun.distance)
    setPace(newRun.pace)
    setTime(newRun.time)
  }
  const getLastestRun = async () => {
    const snapshot = await db
      .collection('runningLog')
      .where('uid', '==', helpers.TOKEN)
      .get()
    if (snapshot.docs) {
      setRun(snapshot.docs[0].data())
    }
    // snapshot.docs.map((doc) => doc.data())
    // console.log(snapshot.docs[0].data())
  }
  const openNewRunForm = () => {
    document.querySelector('#newRun').style.display = 'block'
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    helpers.addRun(distance, pace, time)
  }
  useEffect(() => {
    getLastestRun()
  })
  return (
    <div className="running-container">
      <h1>Dashboard</h1>
      <div className="running-log-today">
        <button type="button" onClick={() => openNewRunForm()}>
          +
        </button>
        <form id="newRun" onSubmit={handleFormSubmit}>
          <label htmlFor="distance">
            Distance(miles)
            <input
              placeholder="Distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </label>
          <label htmlFor="pace">
            Pace(/min)
            <input
              placeholder="Pace"
              value={pace}
              onChange={(e) => setPace(e.target.value)}
            />
          </label>
          <label htmlFor="time">
            Time(mins)
            <input
              placeholder="Total time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
          <button type="submit">Add New Run</button>
        </form>
        <h2>Latest Run</h2>
        <div className="flex-container">
          <div className="run-log">
            <p className="value">{distance} miles</p>
            <p className="metric">Distance</p>
          </div>
          <div className="run-log">
            <p className="value">{pace} /min</p>
            <p className="metric">Pace</p>
          </div>
          <div className="run-log">
            <p className="value">{time} mins</p>
            <p className="metric">Total Time</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RunningStat
