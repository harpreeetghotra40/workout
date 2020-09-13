import React, { useState } from 'react'
import { signOut } from '../../firebase'
import ProfileContainer from '../ProfileContainer/ProfileContainer'

import './dashboard.styles.scss'
import RunningStat from './RunningStat'
import RunningLog from './RunningLog'
import PersonalInfoModal from '../Modals/PersonalInfoModal'

const Dashboard = ({ user }) => {
  const [measurements, setMeasurements] = useState({
    age: 0,
    weight: 10,
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
        <div style={{ flex: '3', display: 'flex', flexDirection: 'column' }}>
          <RunningStat />
          <RunningLog />
        </div>
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
      </div>
    </div>
  )
}

export default Dashboard
