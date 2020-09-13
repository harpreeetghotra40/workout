import React, { useState } from 'react'

// imported function
import helpers from '../methods'

import './modal.styles.scss'

const PersonalInfoModal = ({ measurements, setMeasurements }) => {
  const [weight, setWeight] = useState(measurements.weight)
  const handleSubmit = (e) => {
    e.preventDefault()
    helpers.updateWeight(weight)
    setMeasurements((prevState) => {
      prevState.weight = weight
      return { ...prevState }
    })
    document.querySelector('#personal-modal-container').style.display = 'none'
  }
  return (
    <div id="personal-modal-container">
      <div className="info-container">
        <h2>Metrics</h2>
        <form id="update-info-form" onSubmit={handleSubmit}>
          <label htmlFor="Weight">
            Weight
            <input
              id="weight-input"
              placeholder={weight}
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            pounds
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default PersonalInfoModal
