import React, { useState } from 'react'
import { signOut } from '../../firebase'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import './dashboard.styles.scss'
import PersonalInfoModal from '../Modals/PersonalInfoModal'
import Log from '../Log/Log'

const Dashboard = ({ user }) => {
  const [measurements, setMeasurements] = useState({
    age: 0,
    weight: '',
    height: { feet: 0, inches: 0 },
  })
  return (
    <div className="dashboard-landing-page">
      <div className="flex-container">
        <ProfileContainer
          photoURL={user.photoURL}
          displayName={user.displayName}
          measurements={measurements}
          setMeasurements={setMeasurements}
        />
        <PersonalInfoModal
          measurements={measurements}
          setMeasurements={setMeasurements}
        />
        <button
          type="button"
          onClick={() => signOut()}
          style={{ position: 'absolute' }}
        >
          Logout
        </button>
        <Log />
      </div>
    </div>
  )
}

export default Dashboard
