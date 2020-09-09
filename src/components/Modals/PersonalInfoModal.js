import React from 'react'
import './modal.styles.scss'

const PersonalInfoModal = () => {
  return (
    <div id="personal-modal-container">
      <div className="info-container">
        <h2>Metrics</h2>
        <form id="update-info-form">
          <label htmlFor="Weight">
            Weight
            <input placeholder="Weight" />
          </label>
          <label htmlFor="Height">
            Height
            <input placeholder="Height" />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default PersonalInfoModal
