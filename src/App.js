import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { auth } from './firebase'
import Signup from './components/signup/signup'
import Dashboard from './components/dashboard/Dashboard'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((log) => {
      setUser(log)
      if (user) {
        Cookies.set('userToken', user.uid)
      }
    })
  }, [user, setUser])
  return (
    <div className="App">
      {user === null ? <Signup /> : <Dashboard user={user} />}
    </div>
  )
}

export default App
