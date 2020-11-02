import React, { useState } from 'react'

// imported function
import helpers from '../methods'

import './modal.styles.scss'

const WeightModal = ({ measurements, setMeasurements }) => {
  const [weight, setWeight] = useState(measurements.weight)
  const [height, setHeight] = useState(measurements.height)
  const [age, setAge] = useState(measurements.age)
  const [name, setName] = useState(measurements.name)
  const handleSubmit = (e) => {
    e.preventDefault()
    helpers.updateMeasurements(age, height, weight)
    setMeasurements((prevState) => {
      prevState.weight = weight
      prevState.height = height
      prevState.age = age
      return { ...prevState }
    })
    document.querySelector('#personalModal').style.display = 'none'
  }
  const closeModal = () => {
    document.querySelector('#personalModal').style.display = 'none'
    setWeight('')
  }
  return (
    <div className="blur-background" id="personalModal">
      <div id="personal-modal-container">
        <button className="close-btn" type="button" onClick={closeModal}>
          X
        </button>
        <div className="info-container">
          <div className="modal-header">
            <h2>Personal Information</h2>
          </div>
          <form className="update-info-form" onSubmit={handleSubmit}>
            <label htmlFor="Weight">
              Name
              <input
                id="age-input"
                placeholder="Full Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="Weight">
              Age
              <input
                id="age-input"
                placeholder={age}
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label htmlFor="Weight">
              Weight (kg)
              <input
                id="weight-input"
                placeholder={weight}
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
            <label htmlFor="Weight">
              Height (cm)
              <input
                id="height-input"
                placeholder={height}
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
            <button className="submit-btn">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WeightModal
