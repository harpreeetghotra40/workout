import React, { useState } from 'react'
import closeIcon from '../../images/close.png'
// imported function
import helpers from '../methods'

import './modal.styles.scss'

const WeightModal = ({ measurements, setMeasurements }) => {
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
    document.querySelector('#weightModal').style.display = 'none'
  }
  const closeModal = () => {
    document.querySelector('#weightModal').style.display = 'none'
    setWeight('')
  }
  return (
    <div className="blur-background" id="weightModal">
      <div id="weight-modal-container">
        <div className="info-container">
          <div className="modal-header">
            <h2>Weight Log</h2>
          </div>
          <button className="close-btn" type="button" onClick={closeModal}>
            <img src={closeIcon} alt="close icon" />
          </button>
          <form className="update-info-form" onSubmit={handleSubmit}>
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
              Weight (kg)
              <input
                id="weight-input"
                placeholder={weight}
                type="number"
                step="0.01"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
            <button className="submit-btn" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WeightModal
