import React from 'react'
import { signOut } from '../../firebase'
import ProfileContainer from './ProfileContainer'
// import { signOut } from '../../firebase'

import './dashboard.styles.scss'

const dashboard = ({ user }) => {
  return (
    <div className="dashboard-landing-page">
      <ProfileContainer
        photoURL={user.photoURL}
        displayName={user.displayName}
      />
      {user.displayName} is now Logged In!!
      <button type="submit" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  )
}

export default dashboard
