import React, { useState } from 'react'
import closeIcon from '../../images/close.png'
// imported function
import helpers from '../methods'
import './modal.styles.scss'

const WeightModal = ({ measurements, setMeasurements }) => {
  const [height, setHeight] = useState(measurements.height)
  const [age, setAge] = useState(measurements.age)
  const [name, setName] = useState(measurements.name)
  const handleSubmit = (e) => {
    e.preventDefault()
    helpers.updateMeasurements(age, height, name)
    setMeasurements((prevState) => {
      prevState.height = height
      prevState.name = name
      prevState.age = age
      return { ...prevState }
    })
    document.querySelector('#personalModal').style.display = 'none'
  }
  const closeModal = () => {
    document.querySelector('#personalModal').style.display = 'none'
  }
  return (
    <div className="blur-background" id="personalModal">
      <div id="personal-modal-container">
        <button className="close-btn" type="button" onClick={closeModal}>
          <img src={closeIcon} alt="close icon" />
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
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label htmlFor="Weight">
              Height (cm)
              <input
                id="height-input"
                placeholder={height}
                type="number"
                step="0.1"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
            <button className="submit-btn" type="button">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default WeightModal
