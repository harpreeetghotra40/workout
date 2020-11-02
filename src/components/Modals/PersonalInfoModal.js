import React, { useState } from 'react'

// imported function
import helpers from '../methods'

import './modal.styles.scss'

const PersonalInfoModal = ({ measurements, setMeasurements }) => {
  const [weight, setWeight] = useState(measurements.weight)
  const today = new Date().toJSON().slice(0, 10)
  const [date, setDate] = useState(today)
  const handleSubmit = (e) => {
    e.preventDefault()
    helpers.addNewWeightToLog(weight, date)
    // helpers.updateWeight(weight)
    setMeasurements((prevState) => {
      prevState.weight = weight
      return { ...prevState }
    })
    document.querySelector('#personal-modal-container').style.display = 'none'
  }
  const closeModal = () => {
    document.querySelector('#personal-modal-container').style.display = 'none'
    setWeight(0)
  }
  return (
    <div id="personal-modal-container">
      <div className="info-container">
        <h2>Metrics</h2>
        <button type="button" onClick={closeModal}>
          X
        </button>
        <form id="update-info-form" onSubmit={handleSubmit}>
          <label htmlFor="Date">
            Date:
            <input
              type="date"
              id="date"
              name="trip-Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label htmlFor="Weight">
            Weight
            <input
              id="weight-input"
              placeholder={weight}
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            KG
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default PersonalInfoModal
