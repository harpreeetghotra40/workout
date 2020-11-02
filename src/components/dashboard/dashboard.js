import React, { useState } from 'react'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import './dashboard.styles.scss'
import Log from '../Log/Log'
import WeightModal from '../Modals/WeightModal'
import PersonalInfo from '../Modals/PersonalInfo'

const Dashboard = ({ user }) => {
  const [measurements, setMeasurements] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
  })
  return (
    <div className="dashboard-landing-page">
      <div className="flex-container" style={{ gap: '24px' }}>
        <ProfileContainer
          measurements={measurements}
          setMeasurements={setMeasurements}
        />
        <WeightModal
          measurements={measurements}
          setMeasurements={setMeasurements}
        />
        <PersonalInfo
          measurements={measurements}
          setMeasurements={setMeasurements}
        />
        <Log />
      </div>
    </div>
  )
}

export default Dashboard
