import React from 'react'
import { signOut } from '../../firebase'
import ProfileContainer from '../ProfileContainer/ProfileContainer'

import './dashboard.styles.scss'
import RunningStat from './RunningStat'
import RunningLog from './RunningLog'
import PersonalInfoModal from '../Modals/PersonalInfoModal'

const dashboard = ({ user }) => {
  return (
    <div className="dashboard-landing-page">
      <div className="flex-container">
        <ProfileContainer
          photoURL={user.photoURL}
          displayName={user.displayName}
        />
        <div style={{ flex: '3', display: 'flex', flexDirection: 'column' }}>
          <RunningStat />
          <RunningLog />
        </div>
        <PersonalInfoModal />
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

export default dashboard
