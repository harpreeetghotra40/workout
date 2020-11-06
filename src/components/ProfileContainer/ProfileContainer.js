import React, { useEffect } from 'react'
import { db, auth, signOut } from '../../firebase'
import avatar from '../../images/avatar.png'

const ProfileContainer = ({ measurements, setMeasurements }) => {
  const openPersonalModal = () => {
    document.querySelector('#personalModal').style.display = 'block'
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
  }, [])

  return (
    <div className="profile-container">
      <div
        className="flex-container"
        style={{ alignItems: 'center', gap: '24px' }}
      >
        <div className="image-container">
          <img src={avatar} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info-container">
          <div className="displayName">
            <h2 className="profile-name">{measurements.name}</h2>
          </div>
          <div className="metrics-container">
            <div className="metric">
              <p className="age">Age</p>
              <p className="value">{measurements.age}</p>
            </div>
            <div className="metric">
              <p className="weight">Weight</p>
              <p className="value">{measurements.weight}</p>
            </div>
            <div className="metric">
              <p className="height">Height</p>
              <p className="value">{measurements.height}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-container btn-container">
        <button type="button" onClick={() => openPersonalModal()}>
          Profile
        </button>
        <button type="button" onClick={() => signOut()} className="signOut-btn">
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileContainer
