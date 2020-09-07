import React from 'react'

const ProfileContainer = ({ photoURL, displayName }) => {
  return (
    <div className="profile-container">
      <div className="image-container">
        <img src={photoURL} alt="Profile" className="profile-image" />
      </div>
      <h2 className="profile-name">{displayName}</h2>
      <div className="metrics-container">
        <div className="metric">
          <p className="weight">Weight</p>
          <p className="value">75.8 kg</p>
        </div>
        <div className="metric">
          <p className="height">Height</p>
          <p className="value">178 cm</p>
        </div>
        <div className="metric">
          <p className="age">Age</p>
          <p className="value">24</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer
