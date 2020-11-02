import React, { useEffect } from 'react'
import { db, auth } from '../../firebase'

const ProfileContainer = ({
  photoURL,
  displayName,
  measurements,
  setMeasurements,
}) => {
  const openPersonalModal = () => {
    document.querySelector('#personal-modal-container').style.display = 'block'
  }

  const getMeasurements = () => {
    db.collection('users')
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMeasurements(doc.data())
        } else {
          openPersonalModal()
        }
      })
  }

  useEffect(() => {
    getMeasurements()
  })

  return (
    <div className="profile-container">
      <div className="image-container">
        <img src={photoURL} alt="Profile" className="profile-image" />
      </div>
      <h2 className="profile-name">{displayName}</h2>
      <button type="button" onClick={() => openPersonalModal()}>
        Add Today&apos;s weight
      </button>
      <div className="metrics-container">
        <div className="metric">
          <p className="age">Age</p>
          <p className="value">{measurements.age}</p>
        </div>
        <div className="metric">
          <p className="weight">Weight</p>
          <p className="value">{measurements.weight} kg</p>
        </div>
        <div className="metric">
          <p className="height">Height</p>
          <p className="value">
            {measurements.height.feet} ft {measurements.height.inches} inches
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer
